function FindProxyForURL(url, host) {
    if (host == "git.useepay.com") {
        return "PROXY 54.222.174.222:80";
    } else {
        return "DIRECT";
    }
}
