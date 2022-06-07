# Partytown Iframe Reproduction

Unable to use Partytown in an iframe.

## Steps to reproduce

1. `npm run setup` to copy Partytown lib to file system
2. `npm run start` (Requires python3 to run the `http.server` module)
3. Visit http://localhost:8000
4. See "success" appended to the DOM, but not "success-in-iframe" like we expect
