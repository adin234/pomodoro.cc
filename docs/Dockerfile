FROM smebberson/alpine-nginx

# RUN rm /etc/nginx/nginx.conf.default

RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log

ADD build/ /usr/html
