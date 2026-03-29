export const jobsT = {
    "es": [
        {
            title: "Python Backend Developer (AWS/Serverless)",
            company: "Distribuidora Espora",
            location: "Tandil, Buenos Aires",
            isRemote: true,
            duration: "Ene. 2026 - Act.",
            description: [
                "Desarrollé en Python un pipeline serverless y event-driven en AWS para procesamiento de documentos, automatizando la ingesta y eliminando ~5 horas diarias de carga manual de datos. Aseguré el webhook público con verificación de firma HMAC-SHA256.",
                "Implementé un flujo asíncrono con SQS, Lambda y DynamoDB, con procesamiento idempotente mediante escrituras condicionales, correlación de estado y recuperación de fallos vía DLQ.",
                "Integré Amazon Textract (OCR) con lógica de validación determinística y reglas de negocio para garantizar integridad transaccional y extracción estructurada de datos.",
                "Automaticé la infraestructura con Terraform (Infrastructure as Code), incluyendo gestión de estado remoto, políticas IAM de mínimo privilegio y secretos en SSM Parameter Store.",
                "Implementé observabilidad con aws-lambda-powertools para logging estructurado en JSON y métricas custom en CloudWatch, habilitando detección proactiva de errores y alertas operativas."
            ],
            technologies: ["AWS", "GCP", "Lambda", "SQS", "Textract", "S3", "DynamoDB", "Terraform", "Python"]
        },
        {
            title: "Backend & Data Engineer",
            company: "ISISTAN",
            location: "Tandil, Buenos Aires",
            isRemote: false,
            duration: "Abr. 2025 - Act.",
            description: [
                "Diseño, desarrollo y mantenimiento de sistemas backend en Python orientados a la toma de decisiones, incluyendo servicios de información, interfaces web y visualización de datos.",
                "Gestión y operación de entornos de ejecución para sistemas productivos y de prueba, incluyendo despliegue en máquinas virtuales, administración de servidores web y uso de contenedores.",
                "Diseño y configuración de entornos reproducibles de desarrollo mediante Docker y Docker Compose.",
                "Administración de bases de datos (backup, restore, optimización) en entornos de desarrollo y pruebas.",
                "Construcción de pipelines de datos de alto volumen en Python, integrando motores de búsqueda y bases de datos relacionales.",
                "Implementación de soluciones de Inteligencia Artificial aplicada (análisis semántico, búsqueda y ranking), validando enfoques técnicos mediante Pruebas de Concepto (PoCs).",
                "Participación en instancias de definición con áreas de gerencia, traduciendo necesidades funcionales en soluciones técnicas."
            ],
            technologies: ["Python", "Apache Solr", "Docker", "Docker Compose", "MySQL", "PostgreSQL", "Bash", "Git", "Gitlab", "Astro", "JavaScript"]
        },
        {
            title: "Fullstack Developer",
            company: "ISISTAN",
            location: "Tandil, Buenos Aires",
            isRemote: true,
            duration: "Ago. 2024 - Feb. 2025",
            description: [
                "Práctica Profesional Supervisada de desarrollo de software en el marco de un proyecto de investigación del ISISTAN.",
                "Diseño, desarrollo e implementación de una plataforma web educativa fullstack orientada a facilitar la enseñanza mediante Recorridos de Estudio e Investigación (REIs).",
                "Implementación de funcionalidades backend en Python con SQLite y Redis para trabajo colaborativo, seguimiento del progreso académico y gestión de datos.",
                "Desarrollo de algoritmos de IA aplicada para análisis automático de datos educativos, incluyendo procesamiento semántico con Sentence Transformers.",
                "Despliegue y validación de la plataforma con docentes y estudiantes en contextos reales de aula (experiencia piloto).",
                "Participación en la elaboración de una publicación científica presentada en una conferencia internacional, basada en los resultados del desarrollo.",
                "Colaboración en tareas de investigación, definición de requerimientos, arquitectura y documentación bajo la supervisión del Dr. Alejandro Zunino y la Dra. Daniela Godoy."
            ],
            technologies: ["Astro.js", "TypeScript", "Python", "Docker", "SQLite", "Redis", "Bun.sh", "Preact", "Sentence Transformers"]
        }
    ],
    "en": [
        {
            title: "Python Backend Developer (AWS/Serverless)",
            company: "Distribuidora Espora",
            location: "Tandil, Buenos Aires",
            isRemote: true,
            duration: "Jan. 2026 - Present",
            description: [
                "Built in Python a serverless, event-driven data processing pipeline on AWS, automating document ingestion and eliminating ~5 daily hours of manual data entry. Secured the public webhook endpoint with HMAC-SHA256 signature verification.",
                "Implemented an asynchronous workflow with SQS, Lambda, and DynamoDB using idempotent processing with conditional writes, state correlation, and DLQ-based failure recovery.",
                "Integrated Amazon Textract (OCR) with deterministic validation logic and business rules to ensure transactional integrity and structured data extraction.",
                "Automated the full cloud infrastructure with Terraform (Infrastructure as Code), including remote state management, least-privilege IAM policies, and secrets management via SSM Parameter Store.",
                "Implemented observability with aws-lambda-powertools for structured JSON logging and CloudWatch custom metrics, enabling proactive error detection and operational alerting."
            ],
            technologies: ["AWS", "GCP", "Lambda", "SQS", "Textract", "S3", "DynamoDB", "Terraform", "Python"]
        },
        {
            title: "Data & Backend Engineer",
            company: "ISISTAN",
            location: "Tandil, Buenos Aires",
            isRemote: false,
            duration: "Apr. 2025 - Present",
            description: [
                "Design, development, and maintenance of Python backend systems focused on decision-making, including information services, web interfaces and data visualization.",
                "Management and operation of infrastructure for production and staging environments, including VM deployment, web server administration, and container orchestration.",
                "Design of reproducible development environments using Docker and Docker Compose.",
                "Database administration in development and staging environments, including backups, dumps, and restoration procedures.",
                "Construction of high-volume data pipelines in Python integrating search engines and relational databases.",
                "Implementation of Applied AI and data processing solutions (semantic analysis, search, and ranking), validating approaches through Proofs of Concept (PoCs).",
                "Collaboration with management and stakeholders to translate functional requirements into technical solutions."
            ],
            technologies: ["Python", "Apache Solr", "Docker", "Docker Compose", "MySQL", "PostgreSQL", "Bash", "Git", "Gitlab", "Astro", "JavaScript"]
        },
        {
            title: "Fullstack Developer",
            company: "ISISTAN",
            location: "Tandil, Buenos Aires",
            isRemote: true,
            duration: "Aug. 2024 - Feb. 2025",
            description: [
                "Supervised Professional Internship within an ISISTAN research project.",
                "Designed, developed, and implemented a fullstack educational web platform to support inquiry-based learning through Study and Research Paths (SRP).",
                "Implemented Python backend features with SQLite and Redis for collaborative work, academic progress tracking, and data management.",
                "Developed applied AI algorithms for automated educational data analysis, including semantic processing with Sentence Transformers.",
                "Deployed and validated the platform in real-world classroom pilots; the results led to a scientific paper presented at an international didactics conference.",
                "Collaborated on research, requirements definition, architectural design, and documentation under the supervision of Dr. Alejandro Zunino and Dr. Daniela Godoy."
            ],
            technologies: ["Astro.js", "TypeScript", "Python", "Docker", "SQLite", "Redis", "Bun.sh", "Preact", "Sentence Transformers"]
        }
    ]
}
