# auth.md

This document outlines the authentication and agent registration procedures for the Idatum API. 

Automated agents should refer to our standardized OAuth metadata endpoints for programmatic registration details:
- Protected Resource Metadata: `/.well-known/oauth-protected-resource`
- Authorization Server Metadata: `/.well-known/oauth-authorization-server`

## Supported Methods
We currently support Anonymous and Identity Assertion (ID-JAG / Verified Email) registration flows.
