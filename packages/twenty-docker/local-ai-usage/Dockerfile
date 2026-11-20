# Pin the installed release so this overlay does not upgrade the existing database.
FROM twentycrm/twenty@sha256:1a1e8a8db27fef92227e2817678968a17795d586c241be257c3c6305c65706a6

USER root
COPY enable-ai-usage.cjs /tmp/enable-ai-usage.cjs
RUN node /tmp/enable-ai-usage.cjs && rm /tmp/enable-ai-usage.cjs
USER 1000
