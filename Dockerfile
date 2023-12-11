# Build
FROM node:16-alpine AS build

RUN apk add --no-cache git
RUN git clone https://github.com/Metastem/wikiless.git /wikiless

WORKDIR /wikiless

RUN npm install --no-optional

# Final
FROM gcr.io/distroless/nodejs:16
COPY --from=build /wikiless /wikiless
WORKDIR /wikiless
COPY config.js config.js
CMD ["src/wikiless.js"]