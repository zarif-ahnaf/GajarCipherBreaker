import binascii
import json
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.backends import default_backend

SECRET = "" # Extract this from the damn fucking stupid site
SALT = b"salt"
ITERATIONS = 100000
KEY_LEN = 32  # 256 bits

# The encrypted response from the API
encrypted_data = (
)

kdf = PBKDF2HMAC(
    algorithm=hashes.SHA256(),
    length=KEY_LEN,
    salt=SALT,
    iterations=ITERATIONS,
    backend=default_backend(),
)
key = kdf.derive(SECRET.encode())

parts = encrypted_data.split(":")
if len(parts) != 3:
    raise ValueError("Encrypted data must have 3 colon-separated parts")

iv = binascii.unhexlify(parts[0])  # 16 bytes
tag = binascii.unhexlify(parts[1])  # 16 bytes
ciphertext = binascii.unhexlify(parts[2])  # variable

# In the browser code, the ciphertext and tag are concatenated (tag appended)
combined = ciphertext + tag

aesgcm = AESGCM(key)
plaintext = aesgcm.decrypt(iv, combined, None)
json_str = plaintext.decode("utf-8")
result = json.loads(json_str)
print("✅ Decryption successful!")
print(json.dumps(result, indent=2))
