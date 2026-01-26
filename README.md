# 🌲 Monte Carlo Tree Search (MCTS-DRL) Research

> A heuristic search algorithm for complex decision-making through iterative randomized exploration, integrated with Deep Reinforcement Learning for advanced robotic navigation.

[![License: MIT](https://img.shields.io/badge/License-MIT-cyan.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://sleepingbomb.github.io/MONTE_CARLO_TREE_SEARCH/)
[![ASU](https://img.shields.io/badge/ASU-EEE598-maroon)](https://www.asu.edu/)

![MCTS Preview](assets/preview.png)

## 📖 Overview

This repository contains the research website for **Team 14's** final project on Monte Carlo Tree Search (MCTS) integrated with Deep Reinforcement Learning (DRL) for robotic navigation applications.

### Key Topics Covered

- 🤖 **Human-Robot Interaction** — Follow-ahead navigation scenarios
- 🎯 **MCTS Algorithm** — Selection, Expansion, Simulation, Backpropagation
- 🧠 **DRL Integration** — Enhanced decision-making with learned policies
- 🦾 **Real-World Applications** — Tesla Optimus, Exoskeletons, Path Planning

## 🚀 Live Demo

Visit the live website: [https://sleepingbomb.github.io/MONTE_CARLO_TREE_SEARCH/](https://sleepingbomb.github.io/MONTE_CARLO_TREE_SEARCH/)

## 📄 Research Paper

Download the full PDF report: [Team14_Lathi_Sinha_Chatterjee_MonteCarlo.pdf](Team14_Lathi_Sinha_Chatterjee_MonteCarlo.pdf)

## 📁 Project Structure

```
mcts-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet
├── js/
│   └── main.js         # JavaScript interactions
├── assets/
│   ├── favicon.svg     # Site favicon
│   └── og-image.png    # Social media preview image
├── README.md           # This file
├── LICENSE             # MIT License
└── .gitignore          # Git ignore rules
```

## 🛠️ Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git (for cloning)
- Optional: A local web server for development

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sleepingbomb/MONTE_CARLO_TREE_SEARCH.git
   cd MONTE_CARLO_TREE_SEARCH
   ```

2. **Open locally**
   
   Simply open `index.html` in your browser, or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. **Visit** `http://localhost:8000`

### Deploy to GitHub Pages

1. Push your code to a GitHub repository
2. Go to **Settings** → **Pages**
3. Select **Source**: Deploy from a branch
4. Select **Branch**: `main` and folder `/ (root)`
5. Click **Save**
6. Your site will be live at `https://sleepingbomb.github.io/MONTE_CARLO_TREE_SEARCH/`

## 📊 Research Highlights

### Performance Comparison

| Methodology | Trajectory Accuracy | Obstacle Avoidance | Mean Reward |
|-------------|--------------------|--------------------|-------------|
| DRL Only | Moderate | Limited | -18.4 |
| MCTS Only | Inconsistent | Moderate | 3.2 ± 5.9 |
| **MCTS-DRL** | **Excellent** | **High** | **5.4** |

### Key Findings

- ✅ MCTS-DRL outperforms standalone algorithms
- ✅ Effective follow-ahead navigation with obstacle avoidance
- ✅ 92% success rate with SL-MCTS variant
- ✅ 1.3s average computation time

## 👥 Team 14

| Name | Email |
|------|-------|
| Sakshi Lathi | slathi@asu.edu |
| Abhijit Sinha | asinh117@asu.edu |
| Anusha Chatterjee | achatt53@asu.edu |

**Institution**: Arizona State University  
**Course**: EEE598, Fall 2024

## 📚 References

1. Leisiazar, S., Park, E.J., Lim, A., & Chen, M. (2023). *An MCTS-DRL Based Obstacle and Occlusion Avoidance Methodology in Robotic Follow-Ahead Applications*

2. Li, W., Liu, Y., Ma, Y., Xu, K., Qiu, J., & Gan, Z. (2023). *A Self-Learning Monte Carlo Tree Search Algorithm for Robot Path Planning*. Frontiers in Neurorobotics

3. *Robust walking control of a lower limb rehabilitation exoskeleton coupled with a musculoskeletal model via deep reinforcement learning*

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Arizona State University
- School of Electrical, Computer, and Energy Engineering
- EEE598 Course Staff

---

<p align="center">
  Made with 💜 by Team 14 @ ASU
</p>
