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

Qizhi Pei (裴启智 in Chinese) is currently a second year Ph.D. student at [Gaoling School of Artificial Intelligence (GSAI)](http://ai.ruc.edu.cn/) in [Renmin University of China (RUC)](https://www.ruc.edu.cn/), supervised by [Prof. Rui Yan](https://gsai.ruc.edu.cn/addons/teacher/index/info.html?user_id=0&ruccode=20200243&ln=cn). He got the B.S. degree from [School of Computer Science and Technology](https://cs.ustc.edu.cn/), [Universy of Science and Technology of China (USTC)](https://www.ustc.edu.cn/) in 2022. He currently is an intern of [Microsoft Research AI4Science](https://www.microsoft.com/en-us/research/lab/microsoft-research-ai4science/), mentored by [Dr. Lijun Wu](https://apeterswu.github.io/). He also works closely with [Dr. Yingce Xia](https://www.microsoft.com/en-us/research/people/yinxia/) and [Kaiyuan Gao](https://github.com/KyGao).

His researches focus on AI for science, drug discovery, and geometric deep learning. 

<!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. Suspendisse condimentum, libero vel tempus mattis, risus risus vulputate libero, elementum fermentum mi neque vel nisl. Maecenas facilisis maximus dignissim. Curabitur mattis vulputate dui, tincidunt varius libero luctus eu. Mauris mauris nulla, scelerisque eget massa id, tincidunt congue felis. Sed convallis tempor ipsum rhoncus viverra. Pellentesque nulla orci, accumsan volutpat fringilla vitae, maximus sit amet tortor. Aliquam ultricies odio ut volutpat scelerisque. Donec nisl nisl, porttitor vitae pharetra quis, fringilla sed mi. Fusce pretium dolor ut aliquam consequat. Cras volutpat, tellus accumsan mattis molestie, nisl lacus tempus massa, nec malesuada tortor leo vel quam. Aliquam vel ex consectetur, vehicula leo nec, efficitur eros. Donec convallis non urna quis feugiat. -->

<!-- My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


# 🔥 News
- *2023.10*: &nbsp;🎉🎉 One paper accepted by EMNLP 2023. Thanks for all colleborators!
- *2023.10*: &nbsp;🎉🎉 One paper accepted by Briefings in Bioinformatics 2023. Thanks for all colleborators!
- *2023.09*: &nbsp;🎉🎉 One paper accepted by Neurips 2023. Thanks for all colleborators!

# 📝 Publications
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2023</div><img src='images/fabind.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[FABind: Fast and Accurate Protein-Ligand Binding](https://openreview.net/pdf?id=PnWakgg1RL) \\
**Qizhi Pei**(co-first author), Kaiyuan Gao, Lijun Wu, Jinhua Zhu, Yingce Xia, Shufang Xie, Tao Qin, Kun He, Tie-Yan Liu, Rui Yan

[**Project**](https://neurips.cc/virtual/2023/poster/71739) \| [![](https://img.shields.io/github/stars/QizhiPei/FABind?style=social&label=Code+Stars)](https://github.com/QizhiPei/FABind) \| [![Hugging Face](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-blue?label=Model)](https://huggingface.co/QizhiPei/FABind_model/tree/main)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2023</div><img src='images/biot5.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[BioT5: Enriching Cross-modal Integration in Biology with Chemical Knowledge and Natural Language Associations](https://arxiv.org/abs/2310.07276) \\
**Qizhi Pei**, Wei Zhang, Jinhua Zhu, Kehan Wu, Kaiyuan Gao, Lijun Wu, Yingce Xia, Rui Yan

[**Project**](https://github.com/QizhiPei/BioT5) \| [![](https://img.shields.io/github/stars/QizhiPei/BioT5?style=social&label=Code+Stars)](https://github.com/QizhiPei/BioT5) \| [![Hugging Face](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-blue?label=Model)](https://huggingface.co/QizhiPei/biot5-base/tree/main) \| [![Hugging Face](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-blue?label=Data)](https://huggingface.co/datasets/QizhiPei/BioT5_finetune_dataset)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Briefings in Bioinformatics 2023</div><img src='images/ssm_dta.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SSM-DTA: Breaking the Barriers of Data Scarcity in Drug-Target Affinity Prediction](https://doi.org/10.1093/bib/bbad386) \\
**Qizhi Pei**, Lijun Wu, Jinhua Zhu, Yingce Xia, Shufang Xie, Tao Qin, Haiguang Liu, Tie-Yan Liu, Rui Yan

[**Project**](https://github.com/QizhiPei/SSM-DTA) \| [![](https://img.shields.io/github/stars/QizhiPei/SSM-DTA?style=social&label=Code+Stars)](https://github.com/QizhiPei/SSM-DTA)
</div>
</div>

- ``Arxiv 2023`` [Examining User-Friendly and Open-Sourced Large GPT Models: A Survey on Language, Multimodal, and Scientific GPT Models](https://arxiv.org/abs/2308.14149), Kaiyuan Gao, Sunan He, Zhenyu He, Jiacheng Lin, **Qizhi Pei**, Jie Shao, Wei Zhang \| [![](https://img.shields.io/github/stars/GPT-Alternatives/gpt_alternatives?style=social&label=Code+Stars)](https://github.com/GPT-Alternatives/gpt_alternatives)

# 🎖 Honors and Awards
- *2022*, Excellent Graduation Thesis, USTC.
- *2022*, Outstanding Undergraduate Awards, USTC.
- *2018~2021*, Outstanding Student Scholarship, USTC.

# 📖 Educations
- *2022.09 - Now*, Ph.D. student in the Gaoling School of Artificial Intelligence, Renmin University of China.
- *2018.09 - 2022.06*, undergraduate student in the School of Computer Science and Technology, University of Science and Technology of China.
. 

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

# 💻 Internships
- *2023.07 - Now*, [Microsoft Research AI4Science](https://www.microsoft.com/en-us/research/lab/microsoft-research-ai4science/), Beijing, China.
- *2021.07 - 2023.01*, [Microsoft Research Asia](https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/), Beijing, China.