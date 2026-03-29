FROM node:18-alpine

WORKDIR /app

RUN addgroup -S app && adduser -S app -G app

COPY worker.js ./

USER app

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD pgrep -x node || exit 1

CMD ["node", "worker.js"]