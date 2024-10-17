# Pyramid Flow

>pyramid-flow-sd3
>
>[github](https://github.com/jy0205/Pyramid-Flow?tab=readme-ov-file)
>
>[Hugging Face](https://huggingface.co/rain1011/pyramid-flow-sd3)



## **背景：** 

10 月 10日，快手科技、北京大学和北京邮电大学联合组建的研究团队发布了 Pyramid Flow 文生视频模型。



## **介绍：**

Pyramid Flow 是一种基于流匹配（Flow Matching）的训练效率高的自回归视频生成方法



## **特性：**

> Pyramid Flow, a training-efficient Autoregressive Video Generation method based on Flow Matching.

1、高效生成：

Pyramid Flow（金字塔流）

Pyramid Flow（金字塔流）指的是视频生成中的一种分层方法，可在多个分辨率下运行，类似于金字塔结构。

这种方法允许模型从较低分辨率的表征开始，逐步细化为较高分辨率的表征。 通过这种方式处理数据，Pyramid Flow 提高了计算效率，并保持了帧间的连续性，这对于生成逼真的视频至关重要。



2、快速推理：

自回归视频生成技术

自回归视频生成技术是一种按顺序生成视频每一帧画面的技术，每一帧新画面都会根据之前生成的画面进行预测。

这种方法可确保视频中的时间关系得以保留，从而使最终输出更加逼真。 该模型可学习理解运动和变化是如何随时间发生的，这对于创建流畅、可信的视频序列至关重要。

流匹配

流匹配是一种用于将生成数据的分布与真实数据的分布相一致的方法。 它涉及对数据点（在本例中为视频帧）如何随时间从一种状态过渡到另一种状态进行建模。

通俗地说 ： 流匹配是一种帮助计算机学习如何使生成的视频看起来真实的技术。 它的重点是理解视频的一帧应该如何变化到下一帧。 通过了解这些变化，该模型可以制作出看起来自然可信的视频，就像现实生活中的运动一样。



总的来说：

> Pyramid Flow is like building a video step by step, while Flow Matching makes sure that every step looks good and flows well into the next one.
> 

Pyramid Flow 与流量匹配有什么关系？

Pyramid Flow 使用流量匹配来改进视频生成。

当模型创建视频时，它会使用 "流匹配 "来确保金字塔的每一步（或层）都能顺利过渡到下一步。 这意味着，从模糊版本到清晰版本，它都能保持一切看起来真实流畅。



## **demo：**