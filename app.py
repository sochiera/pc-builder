from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path


class AppHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=Path(__file__).parent / "web", **kwargs)


if __name__ == "__main__":
    ThreadingHTTPServer(("127.0.0.1", 8000), AppHandler).serve_forever()
