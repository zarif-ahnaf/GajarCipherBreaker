My initial attempt at reversing the encryption at https://bd-num-lookup.vercel.app/

## How It Works

1. Key derivation

    * Secret: -,pTU6sdpB>K>5)jamIhx3!_m|G7!/E]H#S$jn#s3Oqw#4J4F,OECU&480rg[o_(1?Vjmj}l2Lg515%x(qgmMy

    * Salt: "salt"

    * Iterations: 100000

    * Hash: SHA-256

    * Output length: 32 bytes (256 bits)

    * Result is used directly as the AES-GCM key.

2. Encrypted data format

    * The data field is a colon-separated hexadecimal string:
    IV : AUTH_TAG : CIPHERTEXT

    * IV length: 16 bytes

    * Auth tag length: 16 bytes

    * Ciphertext length: variable

3. Decryption

    * Concatenate CIPHERTEXT + AUTH_TAG (tag appended)

    * Use AES-GCM with the derived key and the IV to decrypt.
