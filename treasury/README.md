# SUGR Community Treasury

This directory contains the public transparency and verification record
for the official SUGR Community Treasury.

The treasury is controlled by a **2-of-3 Cardano native-script
multisignature wallet**.

No seed phrases, private keys, signing keys, wallet backups or other
private signing material belong in this repository.

---

## Official Treasury

**Network:** Cardano Mainnet

**Control Policy:** 2-of-3 native-script multisignature

**Treasury Address:**

`addr1x8r7229fv0yvzxu6ehdh6mlfqzfm72n6sjuctw4ee5pz3r8mxz70nxpx89ztkptddveudu82mgp72qrpx8ps5awnyr4snrd9uc`

**Cardanoscan:**

https://cardanoscan.io/address/addr1x8r7229fv0yvzxu6ehdh6mlfqzfm72n6sjuctw4ee5pz3r8mxz70nxpx89ztkptddveudu82mgp72qrpx8ps5awnyr4snrd9uc

Always independently verify the treasury address against the public
on-chain record before transferring funds.

---

## Multisig Control

The treasury uses a Cardano native-script multisignature policy.

**Required Signatures:** 2

**Authorized Signing Keys:** 3

This means that no single treasury signer can independently authorize
a treasury spend.

Two authorized signers are required.

The treasury payment credential is controlled by the following native
script hash:

`c7e528a963c8c11b9acddb7d6fe90093bf2a7a84b985bab9cd02288c`

The treasury address also contains a script-controlled stake credential:

`fb30bcf998263944bb056d6b33c6f0eada03e5006131c30a75d320eb`

The complete verified public payment script is maintained in:

[`payment-script.json`](./payment-script.json)

Technical verification information is maintained separately in:

[`VERIFICATION.md`](./VERIFICATION.md)

---

## Authorized Payment Key Hashes

The 2-of-3 payment script contains three authorized public key hashes:

1. `a455017a5d40ab8c0b494e47bba843294317a641fd1f7b06c943702a`
2. `c6c4a15078df475ce4928f4a888c1725232b5cd69dcb21ffd7e49089`
3. `b6b058b5fa15430c1bc9f396167d6e114f72b41467b43b8994fd5e6d`

These are public cryptographic identifiers contained in the treasury's
native script.

They are **not private keys** and cannot independently authorize a
transaction.

Individual signer identities should only be associated with these key
hashes after the mapping has been independently verified and the
relevant signer has agreed to public identification.

---

## Treasury Holdings

Treasury holdings change over time.

For this reason, this repository does not treat a copied token or ADA
balance as the authoritative current treasury balance.

Current holdings should always be verified directly from the Cardano
blockchain using the official treasury address.

The Cardanoscan link above provides a public view of the treasury's
current assets and transaction history.

---

## Treasury Transactions

Treasury activity should be documented so that the community can
independently understand and verify material treasury movements.

Where appropriate, a treasury transaction record should identify:

1. the purpose of the transaction
2. the destination address or addresses
3. the assets and amounts transferred
4. the final Cardano transaction hash
5. the relevant community or treasury decision
6. any supporting public documentation

The blockchain transaction remains the authoritative record of the
actual transfer.

Repository documentation provides context for why the transaction
occurred.

---

## Multisig Signing Principle

Treasury signers should sign transactions independently.

A normal treasury transaction should follow this general process:

1. construct the proposed transaction
2. allow the required signers to review the transaction
3. obtain independent signatures from at least two authorized signers
4. assemble the required witnesses
5. submit the completed transaction to Cardano
6. publish the final transaction hash where appropriate

A signer should never need another signer's seed phrase or private key
to complete this process.

---

## Security

This repository must never contain:

- seed phrases
- private keys
- extended private keys
- signing keys
- wallet spending passwords
- Eternl wallet backups
- browser wallet databases
- API credentials
- recovery phrases
- encrypted wallet backup files
- other private signing material

Treasury signers must never share seed phrases or private signing
material with each other.

Public blockchain information such as addresses, transaction hashes,
native scripts, script hashes and public key hashes may be documented
for transparency after verification.

Public blockchain information must not be confused with private signing
material.

---

## Verification Status

### Verified

The following treasury information has been independently verified
against public Cardano records:

- Cardano Mainnet treasury address
- BASE address structure
- payment credential is script-controlled
- stake credential is script-controlled
- payment native-script hash
- stake script credential hash
- payment policy is 2-of-3
- three payment public key hashes
- historical successful operation of the multisignature payment script

### Still Being Documented

The following information should not yet be represented as fully
documented in this repository:

- complete stake native-script definition
- deterministic mapping between payment key hashes and individual signers
- deterministic mapping between stake key hashes and individual signers
- standardized command-line transaction construction and signing workflow

These items may be added after verification is complete.

---

## Repository Structure

Treasury transparency records are organized as follows:

`README.md`

Public treasury identity, control policy, operating principles and
security guidance.

`payment-script.json`

Verified public Cardano native script controlling treasury payments.

`VERIFICATION.md`

Technical evidence used to independently verify the treasury address,
script credentials and multisig configuration.

Additional transaction records or governance documentation may be added
as treasury operations develop.

---

## Transparency Principle

Publishing a treasury address is not sufficient by itself.

The purpose of this directory is to make treasury control and activity
independently verifiable.

Community members should be able to verify:

- which address is the official treasury
- how many signatures are required
- the public native-script policy controlling treasury payments
- current treasury holdings directly from Cardano
- material treasury transactions
- the relationship between treasury activity and public project records

Transparency should rely on verifiable records rather than trust in
project statements.

---

## Scope

This directory documents the treasury used by the SUGR Community Revival.

It does not grant any person authority to spend treasury assets.

Signing authority is determined by the Cardano native script and the
corresponding private signing keys held independently by authorized
signers.

Nothing published in this repository can substitute for those private
signing credentials.

---

## Disclaimer

Treasury documentation is provided for public transparency and
verification.

Publication of a treasury address, balance, native script or transaction
record does not constitute financial advice, an investment recommendation
or a guarantee regarding the future use or value of treasury assets.

Treasury information should be corrected if independently verifiable
on-chain evidence demonstrates that published information is inaccurate.
