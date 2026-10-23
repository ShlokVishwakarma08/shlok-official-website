import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "backend"))

from app import app


def test_homepage():
    app.config["TESTING"] = True
    client = app.test_client()

    response = client.get("/")

    assert response.status_code == 200
    assert b"SHLOK" in response.data
    assert b"VISHWAKARMA" in response.data


def test_health():
    app.config["TESTING"] = True
    client = app.test_client()

    response = client.get("/health")

    assert response.status_code == 200
    assert response.json["status"] == "healthy"
