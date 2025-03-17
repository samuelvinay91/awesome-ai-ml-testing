# Awesome AI/ML Testing [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![GitHub stars](https://img.shields.io/github/stars/samuelvinay91/awesome-ai-ml-testing?style=social)](https://github.com/samuelvinay91/awesome-ai-ml-testing) [![Link Check](https://github.com/samuelvinay91/awesome-ai-ml-testing/actions/workflows/link-checker.yml/badge.svg)](https://github.com/samuelvinay91/awesome-ai-ml-testing/actions/workflows/link-checker.yml) [![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](https://creativecommons.org/publicdomain/zero/1.0/) [![Visitors](https://visitor-badge.glitch.me/badge?page_id=samuelvinay91.awesome-ai-ml-testing)](https://github.com/samuelvinay91/awesome-ai-ml-testing) [![Contributors](https://img.shields.io/github/contributors/samuelvinay91/awesome-ai-ml-testing)](https://github.com/samuelvinay91/awesome-ai-ml-testing/graphs/contributors) [![Last Commit](https://img.shields.io/github/last-commit/samuelvinay91/awesome-ai-ml-testing)](https://github.com/samuelvinay91/awesome-ai-ml-testing/commits/main)

> The Ultimate Resource for Testing AI/ML Systems - Curated Collection of Frameworks, Tools, Methodologies, and Best Practices

<p align="center">
  <img src="https://raw.githubusercontent.com/sindresorhus/awesome/main/media/logo.svg" alt="Awesome AI/ML Testing" width="400">
</p>

## 🤔 Why This Repository?

Testing AI/ML systems is crucial yet challenging due to their unique characteristics:
- **Non-deterministic behavior**: Models may produce different outputs for same inputs
- **Data dependencies**: Performance heavily relies on training data quality
- **Evolving nature**: Models degrade over time requiring continuous monitoring
- **Complex evaluation**: Traditional metrics may not capture real-world performance

This repository provides **comprehensive resources** to address these challenges and ensure your AI/ML systems are **reliable, fair, and production-ready**.

## 🌟 Share This Repository

Help spread the word about this resource by sharing it with your network:

[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fsamuelvinay91%2Fawesome-ai-ml-testing)](https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20resource%20for%20AI%2FML%20testing%3A&url=https%3A%2F%2Fgithub.com%2Fsamuelvinay91%2Fawesome-ai-ml-testing)
[![LinkedIn](https://img.shields.io/badge/-Share%20on%20LinkedIn-blue?logo=linkedin)](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fgithub.com%2Fsamuelvinay91%2Fawesome-ai-ml-testing)
[![Reddit](https://img.shields.io/badge/-Share%20on%20Reddit-orange?logo=reddit)](https://reddit.com/submit?url=https%3A%2F%2Fgithub.com%2Fsamuelvinay91%2Fawesome-ai-ml-testing&title=Awesome%20AI%2FML%20Testing%20Resources)

## 📈 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=samuelvinay91/awesome-ai-ml-testing&type=Date)](https://star-history.com/#samuelvinay91/awesome-ai-ml-testing&Date)

## 🚀 Getting Started

Testing AI/ML systems presents unique challenges beyond traditional software testing. This curated list provides resources for ensuring the quality, reliability, and fairness of your AI/ML systems throughout their lifecycle.

Whether you're new to ML testing or an experienced practitioner, this list offers valuable resources for implementing effective testing strategies for your AI/ML applications.

## 📋 Contents

- [General ML Testing Frameworks](#general-ml-testing-frameworks)
- [LLM & Chatbot Testing](#llm--chatbot-testing)
- [Data Validation & Quality](#data-validation--quality)
- [Fairness, Bias & Ethics Testing](#fairness-bias--ethics-testing)
- [Adversarial Testing](#adversarial-testing)
- [Monitoring & Observability](#monitoring--observability)
- [CI/CD for ML](#cicd-for-ml)
- [Multi-modal Testing](#multi-modal-testing)
- [Regulatory Compliance Testing](#regulatory-compliance-testing)
- [Generative AI Evaluation](#generative-ai-evaluation)
- [Hardware-aware ML Testing](#hardware-aware-ml-testing)
- [AI Safety Testing](#ai-safety-testing)
- [Benchmarks & Datasets](#benchmarks--datasets)
- [Books & Academic Papers](#books--academic-papers)
- [Courses & Tutorials](#courses--tutorials)
- [Blogs & Newsletters](#blogs--newsletters)
- [Communities & Conferences](#communities--conferences)
- [Case Studies](#case-studies)

## 🛠️ General ML Testing Frameworks

- [Deepchecks](https://github.com/deepchecks/deepchecks) - Test suite for data and models, validating a wide range of potential issues.
- [MLtest](https://github.com/Thenerdstation/mltest) - Testing infrastructure for machine learning with focus on TensorFlow.
- [Giskard](https://github.com/giskard-ai/giskard) - Testing framework focused on vulnerability scanning and detection.
- [Pytest-ml](https://github.com/EthicalML/pytest-ml) - Extension of pytest for validating ML code and models.
- [Manifold](https://github.com/uber/manifold) - Visual debugging tool for machine learning models.
- [ModelDB](https://github.com/mitdbg/modeldb) - System to version ML models and track experiments.
- [MLFlow](https://github.com/mlflow/mlflow) - Platform for the ML lifecycle, including model testing.
- [HyperDrive](https://github.com/microsoft/nni) - Hyperparameter tuning and neural architecture search.
- [Kedro](https://github.com/quantumblacklabs/kedro) - Framework for creating reproducible ML pipelines.
- [Seldon Alibi](https://github.com/SeldonIO/alibi) - Algorithms for monitoring and explaining machine learning models.
- [Determined AI](https://github.com/determined-ai/determined) - Deep learning training platform with built-in validation.
- [Ray Tune](https://github.com/ray-project/ray) - Distributed hyperparameter tuning framework.

## 🤖 LLM & Chatbot Testing

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
- [DeepEval](https://github.com/confident-ai/deepeval) - Evaluation framework for LLMs with human-like metrics.
- [Ragas](https://github.com/explodinggradients/ragas) - Framework for evaluation of RAG (Retrieval Augmented Generation) systems.
- [Promptimize](https://github.com/preset-io/promptimize) - A/B testing and optimization for LLM prompts.
- [LlamaIndex Evaluation](https://github.com/run-llama/llama_index) - Evaluation modules for RAG applications.
- [TruLens-Eval](https://github.com/truera/trulens) - Advanced evaluation metrics for LLMs beyond traditional metrics.
- [MT-Bench](https://github.com/lm-sys/FastChat/tree/main/fastchat/llm_judge) - Multi-turn benchmark for LLM conversation quality.
- [Anthropic's Claude Evaluations](https://github.com/anthropics/evals) - Specialized testing framework for Constitutional AI models.
- [FairEval](https://github.com/i-gallegos/faireval) - Framework for evaluating fairness in language models.
- [AgentBench](https://github.com/THUDM/AgentBench) - Framework for evaluating LLM agents on complex tasks.

## 📊 Data Validation & Quality

- [Great Expectations](https://github.com/great-expectations/great_expectations) - Framework for data validation and quality.
- [TFDV](https://github.com/tensorflow/data-validation) - TensorFlow Data Validation for analyzing and validating ML data.
- [Deequ](https://github.com/awslabs/deequ) - Data quality validation for large datasets (by AWS).
- [Pandera](https://github.com/pandera-dev/pandera) - Statistical data validation for pandas.
- [Cerberus](https://github.com/pyeve/cerberus) - Lightweight and extensible data validation library.
- [Data-Linter](https://github.com/databrickslabs/data-quality) - Tool to identify common data quality issues.
- [DataProfiler](https://github.com/capitalone/DataProfiler) - Profiling and detecting sensitive information in data.
- [Soda Core](https://github.com/sodadata/soda-core) - Data quality testing and monitoring.
- [PyDeequ](https://github.com/awslabs/python-deequ) - Python wrapper for Deequ library.
- [Deepchecks Data Integrity](https://github.com/deepchecks/deepchecks) - Specialized tests for data integrity.
- [Validio](https://github.com/validio-io/validio) - Data validation pipeline tool.
- [Frictionless Data](https://github.com/frictionlessdata/frictionless-py) - Data validation framework for tabular data.

## ⚖️ Fairness, Bias & Ethics Testing

- [AI Fairness 360](https://github.com/Trusted-AI/AIF360) - Toolkit for detecting and mitigating bias in ML models.
- [What-If Tool](https://github.com/PAIR-code/what-if-tool) - Visual tool for investigating model behavior.
- [FairML](https://github.com/adebayoj/fairml) - Auditing black-box predictive models for bias.
- [Aequitas](https://github.com/dssg/aequitas) - Bias and fairness audit toolkit.
- [Fairlearn](https://github.com/fairlearn/fairlearn) - Tools for assessing and improving fairness of ML systems.
- [ML Fairness Gym](https://github.com/google/ml-fairness-gym) - Simulation platform for fairness research.
- [LiFT](https://github.com/linkedin/LiFT) - LinkedIn Fairness Toolkit for measuring bias in ML workflows.
- [Themis ML](https://github.com/cosmicBboy/themis-ml) - Library for fairness-aware machine learning.
- [FairKit](https://github.com/SingerLab/fairkit) - Tools for fair and explainable ML models.
- [Bias Buccaneers](https://github.com/MaartenGr/BiasBuccaneers) - Detecting and mitigating bias in NLP models.
- [Gender Bias Test](https://github.com/tolga-b/debiaswe) - Testing and mitigating gender bias in word embeddings.
- [AI Ethics Toolbox](https://github.com/EthicalML/ethical-ai) - Practical tools for ethical AI development.

## 🛡️ Adversarial Testing

- [TextAttack](https://github.com/QData/TextAttack) - Framework for adversarial attacks on NLP models.
- [Adversarial Robustness Toolkit](https://github.com/Trusted-AI/adversarial-robustness-toolbox) - Testing model robustness against attacks.
- [CleverHans](https://github.com/cleverhans-lab/cleverhans) - Library for benchmarking vulnerability to adversarial examples.
- [FoolBox](https://github.com/bethgelab/foolbox) - Python toolbox to create adversarial examples.
- [DeepFool](https://github.com/LTS4/DeepFool) - Simple algorithm to find adversarial perturbations.
- [EvalAI](https://github.com/Cloud-CV/EvalAI) - Open source platform for evaluating AI algorithms.
- [Counterfit](https://github.com/Azure/counterfit) - Command-line tool for security testing of ML systems.
- [RAID](https://github.com/YyzHarry/raid-transductive) - Robust AI framework for detecting adversarial inputs.
- [Alibi Detect](https://github.com/SeldonIO/alibi-detect) - Tools for outlier, adversarial, and drift detection.
- [PGD Attack](https://github.com/Harry24k/PGD-pytorch) - Implementation of projected gradient descent attack.
- [FGM Attack](https://github.com/Harry24k/FGSM-pytorch) - Fast gradient sign method for adversarial attacks.
- [Threat of Neural Fake News](https://github.com/rowanz/grover) - Tools for detecting neural fake news.

## 📡 Monitoring & Observability

- [Evidently AI](https://github.com/evidentlyai/evidently) - Tools for ML model monitoring and evaluation.
- [WhyLogs](https://github.com/whylabs/whylogs) - Profiling library for ML/AI data and model monitoring.
- [Seldon Core](https://github.com/SeldonIO/seldon-core) - Platform for deploying ML models with monitoring.
- [Prometheus](https://github.com/prometheus/prometheus) - Monitoring system adaptable for ML metrics.
- [Grafana](https://github.com/grafana/grafana) - Analytics & monitoring solution for metrics visualization.
- [Arize AI](https://github.com/Arize-ai/client_python) - ML observability platform.
- [NannyML](https://github.com/NannyML/nannyml) - Post-deployment model performance monitoring.
- [BentoML](https://github.com/bentoml/BentoML) - Model serving with monitoring capabilities.
- [Datadog](https://www.datadoghq.com/product/observability-monitoring/) - ML monitoring integrated with infrastructure.
- [Fiddler AI](https://github.com/fiddler-ai/examples) - Model monitoring focused on explainability.
- [Gantry](https://github.com/gantry-ml/gantry) - Production ML monitoring and debugging.
- [Aporia](https://github.com/aporia-ai/aporia) - Model observability platform.
- [Helicone](https://github.com/Helicone/helicone) - Open-source LLM observability platform.
- [LangSmith](https://github.com/langchain-ai/langsmith-sdk) - Observability and evaluation platform for LLM applications.
- [Superwise](https://github.com/superwise-ai/metadata) - ML monitoring focused on sensitive data applications.
- [Prometheus ML Metrics](https://github.com/prometheus-community/prometheus-ml) - Specialized ML metrics for Prometheus.
- [MLflow Monitoring Extensions](https://github.com/mlflow/mlflow-torchserve) - Advanced monitoring plugins for MLflow.

## 🔄 CI/CD for ML

- [Kubeflow](https://github.com/kubeflow/kubeflow) - ML toolkit for Kubernetes with CI/CD capabilities.
- [GitHub Actions for ML](https://github.com/machine-learning-apps/actions-ml-cicd) - GitHub Actions workflows for ML.
- [DVC](https://github.com/iterative/dvc) - Git for data science, enables versioning of data and models.
- [CML](https://github.com/iterative/cml) - Continuous Machine Learning - CI/CD for ML projects.
- [Jenkins ML Plugin](https://github.com/jenkinsci/machine-learning-plugin) - Plugin connecting Jenkins with ML libraries.
- [MLReef](https://github.com/MLReef/mlreef) - GitLab-based collaboration platform for ML.
- [Pachyderm](https://github.com/pachyderm/pachyderm) - Data lineage and version control for data science.
- [ZenML](https://github.com/zenml-io/zenml) - MLOps framework focusing on reproducibility.
- [MLflow CI/CD](https://github.com/mlflow/mlflow) - Continuous integration features of MLflow.
- [Metaflow](https://github.com/Netflix/metaflow) - Netflix's framework for building data science pipelines.
- [TFX](https://github.com/tensorflow/tfx) - TensorFlow Extended for ML pipelines.
- [Flyte](https://github.com/flyteorg/flyte) - Kubernetes-native workflow orchestration platform.

## 🎭 Multi-modal Testing

- [MMMU](https://github.com/MMMU-Benchmark/MMMU) - Massive Multi-discipline Multimodal Understanding benchmark for testing multimodal models across 30+ disciplines.
- [MME](https://github.com/BradyFU/Awesome-Multimodal-Large-Language-Models) - Multimodal Evaluation benchmark for testing vision-language models on fine-grained capabilities.
- [MultiModal-Eval](https://github.com/OpenGVLab/Multi-Modality-Arena) - Framework for testing multimodal models across diverse tasks and data types.
- [LLaVA-Bench](https://github.com/haotian-liu/LLaVA) - Benchmarking suite for vision-language models on instruction following and reasoning.
- [Modular Testing Framework for Multimodal Models](https://github.com/allenai/multimodal-evaluation) - Testing framework that separates modality-specific testing from integration testing.

## 📜 Regulatory Compliance Testing

- [AI-RMF](https://pages.nist.gov/AIRMF/) - NIST AI Risk Management Framework implementation tools.
- [GDPR Compliance Scanner](https://github.com/privacyradius/gdpr-checklist) - Tools for checking AI systems against GDPR requirements.
- [OpenAI Evals for Legal Compliance](https://github.com/openai/evals) - Extensions to OpenAI's evaluation framework focused on legal requirements.
- [EU AI Act Compliance Toolkit](https://github.com/ethical-ai-toolkit/eu-ai-act) - Tools specifically designed for testing compliance with the EU AI Act.
- [ML Privacy Meter](https://github.com/privacytrustlab/ml_privacy_meter) - Framework for measuring privacy leakage in machine learning models.

## 🎨 Generative AI Evaluation

- [GenBench](https://github.com/google/genbench) - Framework for comprehensive evaluation of generative AI systems.
- [Image Generation Evaluator](https://github.com/openai/dalle-2-preview) - Tools for evaluating the quality and diversity of generated images.
- [SEGA](https://github.com/google-research/sega) - Self-Guided Evaluation framework for generative models.
- [Music Generation Testing Framework](https://github.com/magenta/magenta) - Testing tools for music generation systems.
- [Text2Image-Evaluation](https://github.com/mehdidc/clip_as_service) - Framework for evaluating text-to-image generation models.

## 💻 Hardware-aware ML Testing

- [DeepPerf](https://github.com/sjtuytc/deepperf) - Framework for testing ML models across various hardware configurations.
- [TVM-Benchmark](https://github.com/apache/tvm) - Testing suite for model performance on diverse hardware targets.
- [MLPerf for Edge Devices](https://github.com/mlcommons/inference_results_v2.1) - Benchmark suite for ML inference on edge devices.
- [PowerInfer](https://github.com/SJTU-IPADS/PowerInfer) - Testing framework for power consumption of ML inference.
- [TensorRT Test Automation](https://github.com/NVIDIA/TensorRT) - Tools for testing hardware acceleration of neural networks.

## 🛡️ AI Safety Testing

- [AI Safety Gridworlds](https://github.com/deepmind/ai-safety-gridworlds) - Test environments for AI safety research.
- [AIS Testbed](https://github.com/openai/safety-gym) - Open-source framework for testing AI safety properties.
- [Anthropic's Constitutional AI Testing](https://github.com/anthropics/constitutional-ai) - Testing framework for constitutional AI approaches.
- [Alignment Evaluation](https://github.com/EleutherAI/alignment-handbook) - Tools for testing goal alignment in agent-based AI systems.
- [Robustness Gym](https://github.com/robustness-gym/robustness-gym) - Testing toolkit for evaluating robustness of AI systems.

## 📂 Benchmarks & Datasets

- [MLPerf](https://github.com/mlperf/training) - Industry standard for measuring ML performance.
- [GLUE Benchmark](https://github.com/nyu-mll/GLUE-baselines) - General Language Understanding Evaluation benchmark.
- [SuperGLUE](https://github.com/nyu-mll/jiant) - More challenging extension of GLUE.
- [TensorFlow Model Garden](https://github.com/tensorflow/models) - Models and datasets for benchmarking.
- [HuggingFace Datasets](https://github.com/huggingface/datasets) - Collection of datasets for NLP tasks.
- [Papers With Code Benchmarks](https://github.com/paperswithcode/paperswithcode-data) - Benchmark datasets from research papers.
- [BIG-bench](https://github.com/google/BIG-bench) - Beyond the Imitation Game benchmark for LLMs.
- [MMLU](https://github.com/hendrycks/test) - Massive Multitask Language Understanding benchmark.
- [LM Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness) - Framework for evaluating language models.
- [OLID](https://github.com/Zeeraktalat/OLID) - Offensive Language Identification Dataset.
- [SQuAD](https://github.com/rajpurkar/SQuAD-explorer) - Stanford Question Answering Dataset.
- [BenchMarks.AI](https://benchmarks.ai/) - Comprehensive benchmarking platform for AI.

## 📚 Books & Academic Papers

- [ML Test Score Paper](https://research.google/pubs/pub46555/) - Google's framework for ML testing.
- [Testing in AI: From Component to System](https://dl.acm.org/doi/10.1145/3510458) - Comprehensive overview of AI testing.
- [What's your ML Test Score?](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/45742.pdf) - Google's checklist for ML system testing.
- [Responsible AI Practices](https://ai.google/responsibilities/responsible-ai-practices/) - Google's guide for responsible AI development.
- [A Survey on Concept Drift Adaptation](https://arxiv.org/abs/1010.4784) - Addressing data drift in ML systems.
- [Quality Attributes and Trade-offs in ML Systems](https://arxiv.org/abs/2003.11711) - Understanding ML quality attributes.
- [ML-Ops: Machine Learning as an Engineering Discipline](https://arxiv.org/abs/2006.04785) - Overview of ML operations including testing.
- [Machine Learning Testing: Survey, Landscapes and Horizons](https://arxiv.org/abs/1906.10742) - Comprehensive survey of ML testing techniques.
- [Testing and Validating Machine Learning Systems](https://www.manning.com/books/testing-and-validating-machine-learning-classifiers) - Practical guide to ML testing.
- [Building Machine Learning Powered Applications](https://www.oreilly.com/library/view/building-machine-learning/9781492045106/) - O'Reilly book with testing chapters.
- [Designing Data-Intensive Applications](https://dataintensive.net/) - Book covering data reliability in ML systems.
- [Software Engineering for Machine Learning](https://arxiv.org/abs/1909.03177) - Microsoft's framework for ML system development.

## 🎓 Courses & Tutorials

- [Testing and Monitoring ML Models](https://www.coursera.org/learn/testing-and-monitoring-machine-learning-models) - Coursera course on ML testing.
- [MLOps Specialization](https://www.deeplearning.ai/courses/machine-learning-engineering-for-production-mlops/) - DeepLearning.AI course including testing.
- [Practical Machine Learning](https://www.coursera.org/learn/practical-machine-learning) - Johns Hopkins course with model validation.
- [AI Quality Testing Tutorial](https://github.com/EthicalML/ethical-ml-solutions) - Tutorial on ethical ML testing.
- [Google ML Testing Guide](https://developers.google.com/machine-learning/testing-debugging) - Google's guide to ML testing.
- [Microsoft Responsible AI Resources](https://www.microsoft.com/en-us/ai/responsible-ai-resources) - Educational content on responsible AI.
- [Fast.ai](https://github.com/fastai/fastai) - Practical courses including model validation and testing.
- [Full Stack Deep Learning](https://fullstackdeeplearning.com/) - Course with emphasis on testing & deployment.
- [Udacity ML DevOps Engineer](https://www.udacity.com/enrollment/nd0821/machine-learning-dev-ops-engineer-nanodegree) - Nanodegree on ML operations.
- [ML Engineering for Production](https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops) - Andrew Ng's course on MLOps.
- [Made With ML MLOps Course](https://madewithml.com/#mlops) - Free MLOps curriculum including testing.
- [Weights & Biases Model Testing Tutorial](https://wandb.ai/site/articles/testing-ml-models-in-production) - Practical guide to testing ML models.

## 📰 Blogs & Newsletters

- [MLOps Community Blog](https://mlops.community/blog/) - Articles on ML operations and testing.
- [Neptune.ai Blog](https://neptune.ai/blog) - Content focused on ML experimentation and testing.
- [Deepchecks Blog](https://deepchecks.com/blog/) - Articles on ML testing and validation.
- [Chip Huyen's ML Systems Design Newsletter](https://huyenchip.com/newsletter/) - Newsletter covering ML systems topics.
- [TWIML AI Podcast](https://twimlai.com/) - Podcast with episodes on ML testing and reliability.
- [Google AI Blog](https://ai.googleblog.com/) - Google's AI research blog with testing topics.
- [Microsoft AI Blog](https://blogs.microsoft.com/ai/) - Content on responsible AI development.
- [Papers with Code Newsletter](https://paperswithcode.com/newsletter) - Updates on ML research and benchmarks.
- [Dair.ai Newsletter](https://dair.ai/newsletter/) - Digest on AI research including testing practices.
- [ML Ops Roundup](https://mlopsroundup.substack.com/) - Newsletter focused on ML operations.
- [Applied AI Newsletter](https://appliedai.substack.com/) - Practical insights for AI applications.
- [The Batch](https://www.deeplearning.ai/the-batch/) - Andrew Ng's weekly newsletter with ML insights.

## 👥 Communities & Conferences

- [ML-Ops Community](https://mlops.community/) - Community focused on ML operations including testing.
- [Papers with Code](https://paperswithcode.com/) - Platform for ML research including benchmarking.
- [SciKit-Learn Community](https://scikit-learn.org/stable/about.html#citing-scikit-learn) - Community for ML in Python with testing practices.
- [ICLR](https://iclr.cc/) - Conference on representation learning with testing tracks.
- [NeurIPS](https://nips.cc/) - Machine learning conference with ML testing topics.
- [ACM FAccT](https://facctconference.org/) - Conference on Fairness, Accountability, and Transparency.
- [CIKM](https://www.cikm.org/) - Conference on Information and Knowledge Management with ML focus.
- [MLSys](https://mlsys.org/) - Conference focused on ML systems including testing.
- [ML Safety Workshop](https://ml-safety.org/) - Workshop on safety aspects of ML systems.
- [MLOps World](https://mlopsworld.com/) - Conference dedicated to ML operations.
- [Responsible AI Forum](https://responsibleaiforum.com/) - Forum on ethical AI development.
- [AIES Conference](https://www.aies-conference.com/) - AI, Ethics, and Society conference.

## 📋 Case Studies

- [Uber's ML Testing Framework](https://eng.uber.com/manifold-open-source/) - How Uber built Manifold for ML testing.
- [Netflix's Metaflow Testing](https://netflixtechblog.com/open-sourcing-metaflow-a-human-centric-framework-for-data-science-fa72e04a5d9) - Netflix's approach to ML testing.
- [Spotify's ML Testing](https://engineering.atspotify.com/2020/11/announcing-the-quality-filter-a-music-classifier/) - How Spotify tests music classification systems.
- [Airbnb's ML Model Testing](https://medium.com/airbnb-engineering/overcoming-machine-learning-challenges-to-improve-the-guest-experience-at-airbnb-f9f9b0449733) - Airbnb's approach to ML QA.
- [Google's Model Cards](https://modelcards.withgoogle.com/about) - Framework for responsible ML model reporting.
- [Microsoft's Responsible AI Implementation](https://blogs.microsoft.com/on-the-issues/2022/06/21/microsofts-framework-for-building-ai-systems-responsibly/) - Microsoft's approach to AI testing.
- [LinkedIn's Fairness Testing](https://engineering.linkedin.com/blog/2020/lift-addressing-bias-in-large-scale-ai-applications) - LinkedIn's approach to fairness in recommendations.

## 🚀 Emerging Trends

- [Quantum ML Testing](https://github.com/qmlcode/qml) - Tools for testing quantum machine learning models

## 📈 Weekly Updates

### API Updates
*Automated updates from GitHub and arXiv APIs*

### Community Contributions
*Resources submitted by our community*

### Editor's Picks
*Curated selection of top resources*

### Partner Highlights
*Featured content from our partners*
- [Neuro-Symbolic Testing](https://github.com/neuro-symbolic/neuro-symbolic) - Combining neural and symbolic approaches for robust testing
- [Explainable AI Testing](https://github.com/interpretml/interpret) - Frameworks for testing model explainability
- [Federated Learning Testing](https://github.com/tensorflow/federated) - Tools for testing distributed ML systems
- [Causal ML Testing](https://github.com/py-why/dowhy) - Testing causal relationships in ML models
- [Self-Supervised Testing](https://github.com/facebookresearch/vissl) - Frameworks for testing self-supervised learning approaches

## 🎮 Interactive Resources

- [ML Testing Playground](https://github.com/GoogleCloudPlatform/ml-testing-playground) - Interactive environment for testing ML models
- [AI Testing Sandbox](https://github.com/IBM/ai-testing-sandbox) - Web-based interface for testing AI systems
- [ML Testing Notebooks](https://github.com/DataTalksClub/ml-testing-notebooks) - Jupyter notebooks with testing examples
- [AI Testing Challenges](https://github.com/ai-testing-challenges/ai-testing-challenges) - Hands-on testing problems and solutions
- [ML Testing Simulator](https://github.com/ml-testing-simulator/ml-testing-simulator) - Simulation environment for testing ML systems

## 🧩 Testing Challenges

- [Data Drift Detection](https://github.com/evidentlyai/evidently) - Tools for identifying and handling data drift
- [Model Decay Monitoring](https://github.com/NannyML/nannyml) - Solutions for tracking model performance degradation
- [Edge Case Identification](https://github.com/robustness-gym/robustness-gym) - Frameworks for finding and testing edge cases
- [Adversarial Robustness](https://github.com/Trusted-AI/adversarial-robustness-toolbox) - Testing models against adversarial attacks
- [Scalability Testing](https://github.com/mlperf/inference) - Tools for testing model performance at scale

## 🌟 Community Showcase

- [Open Source ML Testing Projects](https://github.com/topics/ml-testing) - Curated list of community-driven testing tools
- [ML Testing Hackathons](https://github.com/ml-testing-hackathons/ml-testing-hackathons) - Community events focused on ML testing
- [Testing Case Studies](https://github.com/ml-testing-case-studies/ml-testing-case-studies) - Real-world examples from the community
- [Testing Tool Contributions](https://github.com/ml-testing-contributions/ml-testing-contributions) - Showcase of community contributions
- [Testing Research Papers](https://github.com/ml-testing-research/ml-testing-research) - Community-driven research in ML testing

## 🌟 Community Contributors

We gratefully acknowledge the contributions from our community members:

*Your name could be here!*  
[Learn how to contribute](CONTRIBUTING.md)

## Contributing

Your contributions are always welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

## License
