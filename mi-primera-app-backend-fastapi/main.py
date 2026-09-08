from fastapi import FastAPI

app = FastAPI(title="Mi Primera App API")


@app.get("/")
def inicio() -> dict[str, str]:
    return {"mensaje": "Backend FastAPI funcionando"}
