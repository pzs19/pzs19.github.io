---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Zhuoshi Pan (盘卓实 in Chinese) is currently a graduate student at [School of Information Science and Technology (SIST)](https://www.sist.tsinghua.edu.cn/) in [Tsinghua University (THU)](https://www.tsinghua.edu.cn/), supervised by [Prof. H. Vicky Zhao](https://ieeexplore.ieee.org/author/37294624300). He got the B.E. degree from [School of Information Science and Technology (SIST)](https://www.sist.tsinghua.edu.cn/), [Tsinghua University (THU)](https://www.tsinghua.edu.cn/) in 2023. 

<!-- He currently is an intern of [Microsoft DKI Group](https://www.microsoft.com/en-us/research/group/data-knowledge-intelligence/), where he is very fortunate to be mentored by [Dr. Qianhui Wu](https://www.microsoft.com/en-us/research/people/qianhuiwu/). He also works closely with [Huiqiang Jiang](https://www.microsoft.com/en-us/research/people/hjiang/). -->

His researches focus on LLM data synthesis, especially for math and agent domain.
<!-- inference efficiency and data efficiency for LLM.  -->

# 🔥 News
<!-- - *2025.08*: &nbsp; One paper about efficient LLM inference was accepted by EMNLP'25 [Paper](https://arxiv.org/abs/2411.02886)\|[Code](https://github.com/pzs19/TokenSelect). Thanks for the first author [Wei Wu](https://scholar.google.com/citations?user=0aDsRecAAAAJ&hl=en)! -->
- *2025.03*: &nbsp; One paper about LLM financial data synthesis was accepted by ACL'25 Main [Paper](https://aclanthology.org/2025.acl-long.495/)\|[Code](https://github.com/pzs19/InvestAlign). Thanks for the first author [Huisheng Wang](https://openreview.net/profile?id=~Huisheng_Wang2)!
- *2025.03*: &nbsp; One paper about LLM reasoning data synthesis was accepted by ACL'25 Findings [Paper](https://aclanthology.org/2025.findings-acl.605/)\|[Code](https://github.com/pzs19/LEMMA). Thanks for all collaborators!
- *2025.01*: &nbsp; One paper about efficient conversation agent was accepted by ICLR'25 [Paper](https://arxiv.org/abs/2502.05589)\|[Code](https://github.com/microsoft/SeCom). Thanks for all collaborators!
- *2024.12*: &nbsp; One paper about backdoor attack was accepted by NeurIPS'24 [Paper](https://proceedings.neurips.cc/paper_files/paper/2024/hash/95dcc1f6463491d37a8918c1d38380a7-Abstract-Conference.html)\|[Code](https://github.com/OPTML-Group/BiBadDiff). Thanks for all collaborators!
- *2024.03*: &nbsp; LLMLingua-2 was accepted by ACL'24 Findings [Paper](https://aclanthology.org/2024.findings-acl.57/)\|[Code](https://github.com/microsoft/LLMLingua/)\|[Demo](https://huggingface.co/spaces/microsoft/llmlingua-2). Thanks for all collaborators!

# 📝 Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">  </div><img src='images/ScaleDiff.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[ScaleDiff: Scaling Difficult Problems for Advanced Mathematical Reasoning](https://arxiv.org/abs/2509.21070) \| [Under Review] \\
Qizhi Pei, **Zhuoshi Pan** (co-first author), Honglin Lin, Xin Gao, Yu Li, Zinan Tang, Conghui He, Rui Yan, Lijun Wu

[![](https://img.shields.io/github/stars/QizhiPei/ScaleDiff?style=social&label=Code+Stars)](https://github.com/QizhiPei/ScaleDiff) \| [![Hugging Face](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-blue?label=Model)](https://huggingface.co/collections/QizhiPei/scalediff)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">  </div><img src='images/RLVR-Data.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Can One Domain Help Others? A Data-Centric Study on Multi-Domain Reasoning via Reinforcement Learning](https://arxiv.org/abs/2507.17512) \| [Under Review] \\
Yu Li, **Zhuoshi Pan** (co-first author), Honglin Lin, Mengyuan Sun, Conghui He, Lijun Wu 

[![](https://img.shields.io/github/stars/Leey21/A-Data-Centric-Study?style=social&label=Code+Stars)](https://github.com/Leey21/A-Data-Centric-Study)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">  </div><img src='images/REST.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[REST: Stress Testing Large Reasoning Models by Asking Multiple Problems at Once](https://arxiv.org/abs/2507.10541v1) \| [Under Review] \\
**Zhuoshi Pan**, Qizhi Pei, Yu Li, Qiyao Sun, Zinan Tang, H. Vicky Zhao, Conghui He, Lijun Wu

[![](https://img.shields.io/github/stars/opendatalab/REST?style=social&label=Code+Stars)](https://github.com/opendatalab/REST)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">  </div><img src='images/lemma.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[LEMMA: Learning from Errors for MatheMatical Advancement in LLMs](https://arxiv.org/abs/2503.17439) \| [ACL'25 Finding] \\
**Zhuoshi Pan**, Yu Li, Honglin Lin, Qizhi Pei, Zinan Tang, Wei Wu, Chenlin Ming, H. Vicky Zhao, Conghui He, Lijun Wu

[![](https://img.shields.io/github/stars/pzs19/LEMMA?style=social&label=Code+Stars)](https://github.com/pzs19/LEMMA) \| [![Hugging Face](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-blue?label=Model)](https://huggingface.co/collections/panzs19/lemma-68620ced6bedc62fff843e43)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">  </div><img src='images/secom.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Secom: On memory construction and retrieval for personalized conversational agents](https://arxiv.org/abs/2502.05589) \| [ICLR'25] \\
**Zhuoshi Pan**, Qianhui Wu, Huiqiang Jiang, Xufang Luo, Hao Cheng, Dongsheng Li, Yuqing Yang, Chin-Yew Lin, H Vicky Zhao, Lili Qiu, Jianfeng Gao

[**Project**](https://www.microsoft.com/en-us/research/project/secom/) \| [![](https://img.shields.io/github/stars/microsoft/SeCom?style=social&label=Code+Stars)](https://github.com/microsoft/SeCom)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">  </div><img src='images/LLMLingua-2.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[LLMLingua-2: Data Distillation for Efficient and Faithful Task-Agnostic Prompt Compression](https://arxiv.org/abs/2403.12968) \| [ACL'24 Finding] \\
**Zhuoshi Pan**, Qianhui Wu, Huiqiang Jiang, Menglin Xia, Xufang Luo, Jue Zhang, Qingwei Lin, Victor Rühle, Yuqing Yang, Chin-Yew Lin, H. Vicky Zhao, Lili Qiu, Dongmei Zhang

[**Project**](https://llmlingua.com/llmlingua2.html) \| [![](https://img.shields.io/github/stars/microsoft/LLMLingua?style=social&label=Code+Stars)](https://github.com/microsoft/LLMLingua/) \| [![Hugging Face](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-blue?label=Model)](https://huggingface.co/spaces/microsoft/llmlingua-2)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">  </div><img src='images/TokenSelect.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[TokenSelect: Efficient Long-Context Inference and Length Extrapolation for LLMs via Dynamic Token-Level KV Cache Selection](https://arxiv.org/abs/2411.02886) \| [EMNLP'25 Main] \\
Wei Wu, **Zhuoshi Pan** (co-first author), Chao Wang, Liyi Chen, Yunchu Bai, Tianfu Wang, Kun Fu, Zheng Wang, Hui Xiong

[![](https://img.shields.io/github/stars/pzs19/TokenSelect?style=social&label=Code+Stars)](https://github.com/pzs19/TokenSelect)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"> </div><img src='images/BiBadDiff.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[From Trojan Horses to Castle Walls: Unveiling Bilateral Backdoor Effects in Diffusion Models](https://arxiv.org/abs/2311.02373) \| [NeurIPS'24] \\
**Zhuoshi Pan**, Yuguang Yao (co-first author), Gaowen Liu, Bingquan Shen, H. Vicky Zhao, Ramana Rao Kompella, Sijia Liu

[**Project**](https://github.com/OPTML-Group/BiBadDiff) \| [![](https://img.shields.io/github/stars/OPTML-Group/BiBadDiff?style=social&label=Code+Stars)](https://github.com/OPTML-Group/BiBadDiff) 
</div>
</div>

# 🎖 Honors and Awards
- *2025*, First-Class Overall Excellence Award, THU.
- *2024*, First-Class Overall Excellence Award, THU.
- *2020~2022*, Academic Excellence Scholarship, THU.
- *2019*, Freshman Scholarship, THU. 

# 📖 Educations
- *2023.09 - Now*, Graduate student in the School of Information Science and Technology (SIST), Tsinghua University (THU).
- *2019.09 - 2023.06*, Undergraduate student in the School of Information Science and Technology (SIST), Tsinghua University (THU).

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

<!-- # 💻 Internships
- *2023.12 - Now*, [Microsoft DKI Group](https://www.microsoft.com/en-us/research/group/data-knowledge-intelligence/), Beijing, China.
- *2022.06 - 2022.10*, [XiaoIce Company](https://xiaoice.com/), Beijing, China. -->