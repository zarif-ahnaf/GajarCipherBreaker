import requests

url = "https://bd-num-lookup.vercel.app/api/lookup"

params = {
    "number": "01724596500",
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoibG9va3VwIiwiaWF0IjoxNzc3NzA3NjE4LCJleHAiOjE3Nzc3MDk0MTh9.jraYH5JLxiACKGdn6dRTjA-LorbzAhvcMrRombGh__0",
    "ts": "1777708334503",
    "fp": "Mozilla/5.0 (Windows NT 10.0; Wi",
    "sig": "4788278d6bf2302e28eef650ea435c68234d0db900797e5704ddec86eed045b3",
    "ref": "REQUEST_FORM_REACT_APP",
    "referer": "direct"
}

headers = {
    "Origin": "https://bd-num-lookup.vercel.app",
    "Referer": "https://bd-num-lookup.vercel.app/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
}

r = requests.get(url, params=params, headers=headers)

print(r.status_code)
print(r.text)