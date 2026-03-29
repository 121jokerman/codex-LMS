# Production Deployment Guide (AWS/GCP)

## AWS Reference

- Frontend build distribution: S3 + CloudFront
- API Layer: EKS (Node API + FastAPI), ALB ingress
- Databases: RDS PostgreSQL + ElastiCache Redis
- Secrets: AWS Secrets Manager
- Monitoring: CloudWatch + Prometheus + Grafana
- Security: WAF + KMS-encrypted volumes

## GCP Reference

- Frontend artifacts: Cloud Storage + Cloud CDN
- API Layer: GKE or Cloud Run
- Databases: Cloud SQL PostgreSQL + Memorystore Redis
- Secrets: Secret Manager
- Monitoring: Cloud Monitoring + Error Reporting

## Rollout Strategy

1. Deploy canary in staging with mock PSP mode
2. Run VAPT + PCI-DSS control validation
3. Enable one offline channel at a time via feature flags
4. Progressive traffic shift per risk thresholds
5. Activate production PSP adapter after sponsor-bank certification

## Compliance Checklist

- NPCI UPI PSP onboarding complete
- Sponsor bank HSM key exchange complete
- RBI audit artifacts updated
- Incident response and fraud runbooks signed off
