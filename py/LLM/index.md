# 大语言模型

Large Language Model



## 与NLP

NLP：

人工智能领域的一个子领域，专注于研究和开发使计算机能够理解、处理、生成自然语言文本的技术和方法

让计算机能够像人类一样理解和处理自然语言



LLM：

基于深度学习的模型，旨在模拟和生成自然语言文本的模型

过大规模的训练数据来学习自然语言的规律，并能够生成具有语义和语法正确性的文本

通过数据训练、持续学习、上下文理解、多模态输入、人工审核、领域适应性来保证回答正确（语法、语法、事实）



## 知识库

自然语言处理：RAG 以及 LangChain 

通过LangChain将外部计算和数据与LLM连接起来，让LLM访问外部数据。



### RAG：

RAG 技术指的是对大型语言模型输出进行优化，使其能够在生成响应之前引用训练数据来源之外的权威知识库。这种技术通过动态接入外部资源，使LLM得以即时访问和利用广泛且不断更新的知识库，进而提升模型在问答、对话、文本生成等任务中的表现。



### 步骤：

收集资料 -> 文本分块 -> 

嵌入向量数据库（Ollama Embeddings、Weaviate）->

检索增强，通过向量将上下文和用户问题结合发给LLM ->

LLM 根据接收到的上下文和问题生成回答，RAG将检索器、聊天模版、LLM结合进行回答



案例：混元 Embedding 所以服务的高效革新



## 工作流



## 训练流程

![1481724800477_.pic](https://raw.githubusercontent.com/levi33Y/Pictures/main/1481724800477_.pic.jpg)



## 应用

![39a0eb38d7f8ec11d7b4f6f67fd8eac4](https://raw.githubusercontent.com/levi33Y/Pictures/main/39a0eb38d7f8ec11d7b4f6f67fd8eac4.png)



### 问答

多模态



### Agent



### 工作流



### Agentic Workflow设计模式