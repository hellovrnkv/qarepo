FROM mcr.microsoft.com/playwright:v1.42.0-jammy
WORKDIR /app
COPY . .
RUN npm ci
CMD ["npx", "playwright", "test"]
