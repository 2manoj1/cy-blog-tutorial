FROM gitpod/workspace-full
RUN sudo apt-get update

# use Cypress provided image with all dependencies included
FROM cypress/base:10
RUN node --version
RUN npm --version

RUN echo  " node version:    $(node -v) \n" \
    "npm version:     $(npm -v) \n" \
    "yarn version:    $(yarn -v) \n" \
    "debian version:  $(cat /etc/debian_version) \n" \
    "Chrome version:  $(google-chrome --version) \n" \
    "Firefox version: $(firefox --version) \n" \
    "git version:     $(git --version) \n" \
    "whoami:          $(whoami) \n"
