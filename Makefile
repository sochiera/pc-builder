.PHONY: build test smoke ci hardware

build:
	python3 -m py_compile app.py

test: smoke

smoke:
	pytest -q tests/test_smoke.py

ci: smoke

hardware:
	command -v chromium
