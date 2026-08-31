# SUGR Treasury Verification Record

This document records the technical evidence used to verify the official
SUGR Community Treasury.

Its purpose is to allow the treasury identity and payment control policy
to be checked independently against public Cardano blockchain data.

This document contains public blockchain information only.

It must never contain seed phrases, private keys, signing keys, wallet
backups or other private signing material.

---

## Official Treasury Address

**Network:** Cardano Mainnet

**Address Type:** BASE

**Treasury Address:**

`addr1x8r7229fv0yvzxu6ehdh6mlfqzfm72n6sjuctw4ee5pz3r8mxz70nxpx89ztkptddveudu82mgp72qrpx8ps5awnyr4snrd9uc`

**Cardanoscan:**

https://cardanoscan.io/address/addr1x8r7229fv0yvzxu6ehdh6mlfqzfm72n6sjuctw4ee5pz3r8mxz70nxpx89ztkptddveudu82mgp72qrpx8ps5awnyr4snrd9uc

**Cardanoscan Address Inspector:**

https://cardanoscan.io/addressInspector?address=addr1x8r7229fv0yvzxu6ehdh6mlfqzfm72n6sjuctw4ee5pz3r8mxz70nxpx89ztkptddveudu82mgp72qrpx8ps5awnyr4snrd9uc

---

## Address Encoding

Cardanoscan identifies the treasury as a Cardano Mainnet BASE address.

**Bech32 Address:**

`addr1x8r7229fv0yvzxu6ehdh6mlfqzfm72n6sjuctw4ee5pz3r8mxz70nxpx89ztkptddveudu82mgp72qrpx8ps5awnyr4snrd9uc`

**Hex Address:**

`31c7e528a963c8c11b9acddb7d6fe90093bf2a7a84b985bab9cd02288cfb30bcf998263944bb056d6b33c6f0eada03e5006131c30a75d320eb`

The BASE address contains two script credentials:

1. payment credential
2. stake credential

---

## Payment Credential

**Credential Type:** SCRIPT

**Payment Script Hash:**

`c7e528a963c8c11b9acddb7d6fe90093bf2a7a84b985bab9cd02288c`

Cardanoscan exposes the native script associated with this payment
credential.

The verified public script is preserved in:

[`payment-script.json`](./payment-script.json)

---

## Payment Native Script

The public native script is:

```json
{
  "type": "atLeast",
  "scripts": [
    {
      "type": "sig",
      "keyHash": "a455017a5d40ab8c0b494e47bba843294317a641fd1f7b06c943702a"
    },
    {
      "type": "sig",
      "keyHash": "c6c4a15078df475ce4928f4a888c1725232b5cd69dcb21ffd7e49089"
    },
    {
      "type": "sig",
      "keyHash": "b6b058b5fa15430c1bc9f396167d6e114f72b41467b43b8994fd5e6d"
    }
  ],
  "required": 2
}
