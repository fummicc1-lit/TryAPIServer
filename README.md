## Run

```shell
docker build . -t lit-node-slim
docker run --mount type=bind,source="$(pwd)",target=/app -itd lit-node-slim
```
