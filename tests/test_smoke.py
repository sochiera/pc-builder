import shutil
import subprocess
import time
import urllib.request
from pathlib import Path


ROOT = Path(__file__).parents[1]


def test_configurator_recalculates_visible_summary():
    chrome = shutil.which("chromium")
    assert chrome, "Chromium is required for the browser smoke test"
    server = subprocess.Popen(["python3", "app.py"], cwd=ROOT)
    try:
        for _ in range(30):
            try:
                urllib.request.urlopen("http://127.0.0.1:8000", timeout=0.2)
                break
            except OSError:
                time.sleep(0.1)
        else:
            raise AssertionError("Application server did not start")

        result = subprocess.run(
            [chrome, "--headless", "--no-sandbox", "--disable-gpu", "--virtual-time-budget=1000", "--dump-dom", "http://127.0.0.1:8000/smoke.html"],
            cwd=ROOT,
            capture_output=True,
            text=True,
        )
        assert result.returncode == 0, result.stderr
        assert "3698&nbsp;zł" in result.stdout
        assert "408 W | Sugerowany zasilacz: co najmniej 600 W" in result.stdout
    finally:
        server.terminate()
        server.wait()
