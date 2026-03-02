export const jobsT = {
    "es": [
        {
            title: "Freelance Cloud Engineer",
            company: "Distribuidora Espora",
            location: "Tandil, Buenos Aires",
            isRemote: true,
            duration: "Ene. 2026 - Act.",
            description: `<ul style="margin: 0; padding-left: 20px;">
<li>Diseñé y desplegué un <strong>pipeline serverless y event-driven en AWS</strong> para procesamiento de documentos, automatizando la ingesta y eliminando ~5 horas diarias de carga manual de datos. Aseguré el webhook público con <strong>verificación de firma HMAC-SHA256</strong>.</li>
<li>Diseñé un flujo asíncrono con <strong>SQS, Lambda y DynamoDB</strong>, implementando procesamiento idempotente con escrituras condicionales, correlación de estado y <strong>recuperación de fallos mediante DLQ</strong>.</li>
<li>Integré <strong>Amazon Textract (OCR)</strong> con lógica de validación determinística para garantizar integridad transaccional y extracción estructurada de datos.</li>
<li>Provisioné toda la infraestructura con <strong>Terraform (Infrastructure as Code)</strong> incluyendo gestión de estado remoto, <strong>políticas IAM de mínimo privilegio</strong> y gestión de secretos con SSM Parameter Store.</li>
<li>Implementé observabilidad con <strong>aws-lambda-powertools</strong> para logging estructurado en JSON y métricas custom en CloudWatch, habilitando detección proactiva de errores y alertas operativas.</li>
</ul>`,
            technologies: ["AWS", "GCP", "Lambda", "SQS", "Textract", "S3", "DynamoDB", "Terraform", "Python"]
        },
        {
            title: "Backend & Data Engineer",
            company: "Instituto Superior de Ingeniería de Software de Tandil",
            location: "Tandil, Buenos Aires",
            isRemote: false,
            duration: "Abr. 2025 - Act.",
            description: `<ul style="margin: 0; padding-left: 20px;">
<li>Diseño, desarrollo y mantenimiento de <strong>sistemas backend</strong> orientados a la toma de decisiones, incluyendo servicios de información, interfaces web y visualización de datos.</li>
<li>Gestión y operación de entornos de ejecución para sistemas productivos y de prueba, incluyendo <strong>despliegue en máquinas virtuales</strong>, administración de servidores web y uso de <strong>contenedores</strong>.</li>
<li>Diseño y configuración de entornos reproducibles de desarrollo mediante <strong>Docker y Docker Compose</strong>.</li>
<li><strong>Administración de bases de datos</strong> (backup, restore, optimización) en entornos de desarrollo y pruebas.</li>
<li>Construcción de <strong>pipelines de datos</strong> de alto volumen, integrando <strong>motores de búsqueda</strong> y bases de datos relacionales.</li>
<li>Implementación de soluciones de Inteligencia Artificial aplicada (análisis semántico, búsqueda y ranking), validando enfoques técnicos mediante Pruebas de Concepto (PoCs).</li>
<li>Participación en instancias de definición con áreas de gerencia, traduciendo necesidades funcionales en soluciones técnicas.</li>
</ul>`,
            technologies: ["Python", "Apache Solr", "Docker", "Docker Compose", "MySQL", "PostgreSQL", "Bash", "Git", "Gitlab", "Astro", "JavaScript"]
        },
        {
            title: "Fullstack Developer",
            company: "Instituto Superior de Ingeniería de Software de Tandil",
            location: "Tandil, Buenos Aires",
            isRemote: true,
            duration: "Ago. 2024 - Feb. 2025",
            description: `<ul style="margin: 0; padding-left: 20px;">
    <li><strong>Práctica Profesional Supervisada</strong> de desarrollo de software en el marco de un proyecto de investigación del ISISTAN.</li>
    <li>Diseño, desarrollo e implementación de una <strong>plataforma web educativa</strong> orientada a facilitar la enseñanza mediante Recorridos de Estudio e Investigación (REIs).</li>
    <li>Implementación de funcionalidades de trabajo colaborativo, seguimiento del progreso académico y <strong>análisis automático de datos</strong> educativos mediante técnicas de <strong>Inteligencia Artificial</strong>.</li>
    <li><strong>Despliegue y validación</strong> de la plataforma con docentes y estudiantes en contextos reales de aula (experiencia piloto).</li>
    <li>Participación en la elaboración de una <strong>publicación científica</strong> presentada en una conferencia internacional, basada en los resultados del desarrollo.</li>
    <li>Colaboración en tareas de investigación, definición de requerimientos, arquitectura y documentación bajo la supervisión del Dr. Alejandro Zunino y la Dra. Daniela Godoy.</li>
</ul>`,
            technologies: ["Astro.js", "TypeScript", "Python", "Docker", "SQLite", "Redis", "Bun.sh", "Preact", "Sentence Transformers"]
        }
    ],
    "en": [
        {
            title: "Freelance Cloud Engineer",
            company: "Distribuidora Espora",
            location: "Tandil, Buenos Aires",
            isRemote: true,
            duration: "Ene. 2026 - Act.",
            description: `<ul style="margin: 0; padding-left: 20px;">
<li>Architected and deployed a <strong>serverless, event-driven data processing pipeline on AWS</strong>, automating document ingestion and eliminating ~5 daily hours of manual data entry. Secured the public webhook endpoint with <strong>HMAC-SHA256 signature verification</strong>.</li>
<li>Designed an asynchronous workflow using <strong>SQS, Lambda, and DynamoDB</strong>, implementing idempotent processing with conditional writes, state correlation, and <strong>DLQ-based failure recovery</strong>.</li>
<li>Integrated <strong>Amazon Textract (OCR)</strong> with deterministic validation logic to ensure transactional integrity and structured data extraction.</li>
<li>Provisioned the full infrastructure using <strong>Terraform (Infrastructure as Code)</strong> with remote state management, <strong>least-privilege IAM policies</strong>, and secrets management via SSM Parameter Store.</li>
<li>Implemented observability through <strong>aws-lambda-powertools</strong> for structured JSON logging and CloudWatch custom metrics, enabling proactive error detection and operational alerting.</li>
</ul>`,
            technologies: ["AWS", "GCP", "Lambda", "SQS", "Textract", "S3", "DynamoDB", "Terraform", "Python"]
        },
        {
            title: "Data & Backend Engineer",
            company: "Instituto Superior de Ingeniería de Software de Tandil",
            location: "Tandil, Buenos Aires",
            isRemote: false,
            duration: "Apr. 2025 - Act.",
            description: `<ul style="margin: 0; padding-left: 20px;">
    <li>Design, development, and maintenance of <strong>decision-oriented backend systems</strong>, including information services, web interfaces and data visualization.</li>
    <li>Management and operation of infrastructure for production and staging environments, including <strong>VM deployment</strong>, web server administration, and <strong>container orchestration</strong>.</li>
    <li>Design of reproducible development environments using <strong>Docker and Docker Compose</strong>.</li>
    <li><strong>Database administration</strong> in development and staging environments, including backups, dumps, and restoration procedures.</li>
    <li>Construction of <strong>high-volume data pipelines</strong> integrating <strong>search engines</strong> and relational databases.</li>
    <li>Implementation of Applied AI and data processing solutions (semantic analysis, search, and ranking), validating approaches through Proofs of Concept (PoCs).</li>
    <li>Collaboration with management and stakeholders to translate functional requirements into technical solutions.</li>
</ul>`,
            technologies: ["Python", "Apache Solr", "Docker", "Docker Compose", "MySQL", "PostgreSQL", "Bash", "Git", "Gitlab", "Astro", "JavaScript"]
        },
        {
            title: "Fullstack Developer",
            company: "Instituto Superior de Ingeniería de Software de Tandil",
            location: "Tandil, Buenos Aires",
            isRemote: true,
            duration: "Aug. 2024 - Feb. 2025",
            description: `<ul style="margin: 0; padding-left: 20px;">
    <li><strong>Supervised Professional Internship</strong> within an ISISTAN research project.</li>
    <li>Designed, developed, and implemented a <strong>web-based educational platform</strong> to facilitate inquiry-based learning through Study and Research Paths (SRP).</li>
    <li>Developed features for collaborative work, academic progress tracking, and <strong>automated educational data analysis</strong> using <strong>AI techniques</strong>.</li>
    <li><strong>Deployed and validated</strong> the platform in real-world classroom pilots; the results led to a <strong>scientific paper</strong> presented at an international didactics conference.</li>
    <li>Collaborated on research, requirements definition, architectural design, and documentation under the supervision of Dr. Alejandro Zunino and Dr. Daniela Godoy.</li>
</ul>`,
            technologies: ["Astro.js", "TypeScript", "Python", "Docker", "SQLite", "Redis", "Bun.sh", "Preact", "Sentence Transformers"]
        }
    ]
}
