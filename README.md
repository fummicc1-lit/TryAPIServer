## Run

```shell
docker build . -t lit-ruby-slim
docker run --mount type=bind,source="$(pwd)",target=/app -itd lit-ruby-slim
```
