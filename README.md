# Awesome AI/ML Testing [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of awesome testing frameworks, tools, methodologies, and resources for AI/ML systems

## Contents

- [General ML Testing Frameworks](#general-ml-testing-frameworks)
- [LLM & Chatbot Testing](#llm--chatbot-testing)
- [Data Validation & Quality](#data-validation--quality)
- [Fairness, Bias & Ethics Testing](#fairness-bias--ethics-testing)
- [Adversarial Testing](#adversarial-testing)
- [Monitoring & Observability](#monitoring--observability)
- [CI/CD for ML](#cicd-for-ml)
- [Benchmarks & Datasets](#benchmarks--datasets)
- [Books & Academic Papers](#books--academic-papers)
- [Courses & Tutorials](#courses--tutorials)
- [Communities & Conferences](#communities--conferences)

## General ML Testing Frameworks

- [Deepchecks](https://github.com/deepchecks/deepchecks) - Test suite for data and models, validating a wide range of potential issues.
- [MLtest](https://github.com/Thenerdstation/mltest) - Testing infrastructure for machine learning with focus on TensorFlow.
- [Giskard](https://github.com/giskard-ai/giskard) - Testing framework focused on vulnerability scanning and detection.
- [Pytest-ml](https://github.com/EthicalML/pytest-ml) - Extension of pytest for validating ML code and models.
- [Manifold](https://github.com/uber/manifold) - Visual debugging tool for machine learning models.
- [ModelDB](https://github.com/VertexAI/modeldb) - System to version ML models and track experiments.
- [MLFlow](https://github.com/mlflow/mlflow) - Platform for the ML lifecycle, including model testing.
- [HyperDrive](https://github.com/microsoft/nni) - Hyperparameter tuning and neural architecture search.
- [Kedro](https://github.com/quantumblacklabs/kedro) - Framework for creating reproducible ML pipelines.

## LLM & Chatbot Testing

- [LangChain Evaluation Framework](https://github.com/langchain-ai/langchain) - Testing framework for LLM applications.
- [HELM](https://github.com/stanford-crfm/helm) - Holistic Evaluation of Language Models.
- [LLM-Eval](https://github.com/EleutherAI/lm-evaluation-harness) - Framework for evaluating language models.
- [Botium](https://github.com/codeforequity-at/botium-core) - Testing automation for conversational AI.
- [BERTScore](https://github.com/Tiiiger/bert_score) - Evaluating text generation with BERT.
- [ChatEval](https://github.com/chateval/application) - Scientific framework for evaluating chatbots.
- [ROUGE](https://github.com/google-research/google-research/tree/master/rouge) - Evaluation metric for summarization tasks.
- [Rasa Testing Framework](https://github.com/RasaHQ/rasa) - Built-in testing for Rasa conversational agents.
- [promptfoo](https://github.com/promptfoo/promptfoo) - Testing and evaluation framework for LLM prompts.
- [TruLens](https://github.com/truera/trulens) - LLM evaluation focused on faithfulness, quality and safety.
- [Guardrails](https://github.com/guardrails-ai/guardrails) - Framework to validate and clean language model outputs.

## Data Validation & Quality

- [Great Expectations](https://github.com/great-expectations/great_expectations) - Framework for data validation and quality.
- [TFDV](https://github.com/tensorflow/data-validation) - TensorFlow Data Validation for analyzing and validating ML data.
- [Deequ](https://github.com/awslabs/deequ) - Data quality validation for large datasets (by AWS).
- [Pandera](https://github.com/pandera-dev/pandera) - Statistical data validation for pandas.
- [Cerberus](https://github.com/pyeve/cerberus) - Lightweight and extensible data validation library.
- [Data-Linter](https://github.com/databricks/data-linter) - Tool to identify common data quality issues.
- [DataProfiler](https://github.com/capitalone/DataProfiler) - Profiling and detecting sensitive information in data.

## Fairness, Bias & Ethics Testing

- [AI Fairness 360](https://github.com/Trusted-AI/AIF360) - Toolkit for detecting and mitigating bias in ML models.
- [What-If Tool](https://github.com/PAIR-code/what-if-tool) - Visual tool for investigating model behavior.
- [FairML](https://github.com/adebayoj/fairml) - Auditing black-box predictive models for bias.
- [Aequitas](https://github.com/dssg/aequitas) - Bias and fairness audit toolkit.
- [Fairlearn](https://github.com/fairlearn/fairlearn) - Tools for assessing and improving fairness of ML systems.
- [ML Fairness Gym](https://github.com/google/ml-fairness-gym) - Simulation platform for fairness research.
- [LiFT](https://github.com/linkedin/LiFT) - LinkedIn Fairness Toolkit for measuring bias in ML workflows.

## Adversarial Testing

- [TextAttack](https://github.com/QData/TextAttack) - Framework for adversarial attacks on NLP models.
- [Adversarial Robustness Toolkit](https://github.com/Trusted-AI/adversarial-robustness-toolbox) - Testing model robustness against attacks.
- [CleverHans](https://github.com/cleverhans-lab/cleverhans) - Library for benchmarking vulnerability to adversarial examples.
- [FoolBox](https://github.com/bethgelab/foolbox) - Python toolbox to create adversarial examples.
- [DeepFool](https://github.com/LTS4/DeepFool) - Simple algorithm to find adversarial perturbations.
- [EvalAI](https://github.com/Cloud-CV/EvalAI) - Open source platform for evaluating AI algorithms.
- [Counterfit](https://github.com/Azure/counterfit) - Command-line tool for security testing of ML systems.

## Monitoring & Observability

- [Evidently AI](https://github.com/evidentlyai/evidently) - Tools for ML model monitoring and evaluation.
- [WhyLogs](https://github.com/whylabs/whylogs) - Profiling library for ML/AI data and model monitoring.
- [Seldon Core](https://github.com/SeldonIO/seldon-core) - Platform for deploying ML models with monitoring.
- [Prometheus](https://github.com/prometheus/prometheus) - Monitoring system adaptable for ML metrics.
- [Grafana](https://github.com/grafana/grafana) - Analytics & monitoring solution for metrics visualization.
- [Arize AI](https://github.com/Arize-ai/client_python) - ML observability platform.
- [NannyML](https://github.com/NannyML/nannyml) - Post-deployment model performance monitoring.

## CI/CD for ML

- [Kubeflow](https://github.com/kubeflow/kubeflow) - ML toolkit for Kubernetes with CI/CD capabilities.
- [GitHub Actions for ML](https://github.com/machine-learning-apps/actions-ml-cicd) - GitHub Actions workflows for ML.
- [DVC](https://github.com/iterative/dvc) - Git for data science, enables versioning of data and models.
- [CML](https://github.com/iterative/cml) - Continuous Machine Learning - CI/CD for ML projects.
- [Jenkins ML Plugin](https://github.com/jenkinsci/ml-plugin) - Plugin connecting Jenkins with ML libraries.
- [MLReef](https://github.com/MLReef/mlreef) - GitLab-based collaboration platform for ML.
- [Pachyderm](https://github.com/pachyderm/pachyderm) - Data lineage and version control for data science.

## Benchmarks & Datasets

- [MLPerf](https://github.com/mlperf/training) - Industry standard for measuring ML performance.
- [GLUE Benchmark](https://github.com/nyu-mll/GLUE-baselines) - General Language Understanding Evaluation benchmark.
- [SuperGLUE](https://github.com/nyu-mll/jiant) - More challenging extension of GLUE.
- [TensorFlow Model Garden](https://github.com/tensorflow/models) - Models and datasets for benchmarking.
- [HuggingFace Datasets](https://github.com/huggingface/datasets) - Collection of datasets for NLP tasks.
- [Papers With Code Benchmarks](https://github.com/paperswithcode/paperswithcode-data) - Benchmark datasets from research papers.
- [BIG-bench](https://github.com/google/BIG-bench) - Beyond the Imitation Game benchmark for LLMs.

## Books & Academic Papers

- [ML Test Score Paper](https://research.google/pubs/pub46555/) - Google's framework for ML testing.
- [Testing in AI: From Component to System](https://dl.acm.org/doi/10.1145/3510458) - Comprehensive overview of AI testing.
- [What's your ML Test Score?](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/45742.pdf) - Google's checklist for ML system testing.
- [Responsible AI Practices](https://ai.google/responsibilities/responsible-ai-practices/) - Google's guide for responsible AI development.
- [A Survey on Concept Drift Adaptation](https://arxiv.org/abs/1010.4784) - Addressing data drift in ML systems.
- [Quality Attributes and Trade-offs in ML Systems](https://arxiv.org/abs/2003.11711) - Understanding ML quality attributes.
- [ML-Ops: Machine Learning as an Engineering Discipline](https://arxiv.org/abs/2006.04785) - Overview of ML operations including testing.

## Courses & Tutorials

- [Testing and Monitoring ML Models](https://www.coursera.org/learn/testing-and-monitoring-machine-learning-models) - Coursera course on ML testing.
- [MLOps Specialization](https://www.deeplearning.ai/courses/machine-learning-engineering-for-production-mlops/) - DeepLearning.AI course including testing.
- [Practical Machine Learning](https://www.coursera.org/learn/practical-machine-learning) - Johns Hopkins course with model validation.
- [AI Quality Testing Tutorial](https://github.com/EthicalML/ethical-ml-solutions) - Tutorial on ethical ML testing.
- [Google ML Testing Guide](https://developers.google.com/machine-learning/testing-debugging) - Google's guide to ML testing.
- [Microsoft Responsible AI Resources](https://www.microsoft.com/en-us/ai/responsible-ai-resources) - Educational content on responsible AI.
- [Fast.ai](https://github.com/fastai/fastai) - Practical courses including model validation and testing.

## Communities & Conferences

- [ML-Ops Community](https://mlops.community/) - Community focused on ML operations including testing.
- [Papers with Code](https://paperswithcode.com/) - Platform for ML research including benchmarking.
- [SciKit-Learn Community](https://scikit-learn.org/stable/about.html#citing-scikit-learn) - Community for ML in Python with testing practices.
- [ICLR](https://iclr.cc/) - Conference on representation learning with testing tracks.
- [NeurIPS](https://nips.cc/) - Machine learning conference with ML testing topics.
- [ACM FAccT](https://facctconference.org/) - Conference on Fairness, Accountability, and Transparency.
- [CIKM](https://www.cikm.org/) - Conference on Information and Knowledge Management with ML focus.

## Contributing

Your contributions are always welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
