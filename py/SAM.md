# SVM



## 任务（Task）



## 模型（Model）



### 图像编码器（Image Encoder）

在最高级别，图像编码器 （掩膜自编码器，MAE，预训练视觉Transformer，ViT）生成一次性图像嵌入，并且可以在提示模型之前应用。



### 提示编码器（）

提示编码器将背景点、掩膜、边界框或文本实时编码为嵌入向量。该研究考虑了两组提示：稀疏（点、框、文本）和密集（掩膜）。

点和框由位置编码表示，并为每种提示类型添加学习的嵌入。自由格式的文本提示由CLIP的现成文本编码器表示。密集提示（如掩膜）通过卷积嵌入，并通过图像嵌入按元素求和。



### 轻量级掩膜解码器（）

轻量级掩膜解码器根据图像和提示编码器的嵌入来预测分割掩膜。它将图像嵌入、提示嵌入和输出token映射到掩码。所有嵌入均由解码器块更新，解码器块在两个方向（从提示到图像嵌入再返回）使用即时自注意力和交叉注意力。

掩膜带有标注并用于更新模型权重。这种布局增强了数据集，并允许模型随着时间的推移进行学习和改进，使其高效且灵活。



## 数据集（Data）



## 补充



### 掩膜（Mask）

选定的图像、图形或物体



#### 作用

**提取感兴趣区**：用预先制作的感兴趣区掩膜与待处理图像相乘，得到感兴趣区图像，感兴趣区内图像值保持不变，而区外图像值都为0；
**屏蔽作用：**用掩膜对图像上某些区域作屏蔽，使其不参加处理或不参加处理参数的计算，或仅对屏蔽区作处理或统计；
**结构特征提取：**用相似性变量或图像匹配方法检测和提取图像中与掩膜相似的结构特征；
**特殊形状图像的制作。**



#### demo

![image-20240919082201745](https://raw.githubusercontent.com/levi33Y/Pictures/main/image-20240919082201745.png)



### 卷积