---
title: Human Emotion Detection
description: Finding the best machine learning algorithm to predict emotion detection.
publishedAt: 2023-06-05
---
**Title: Comparative Analysis of Machine Learning Algorithms for Emotion Detection Using Facial Expressions**

**Abstract:**
Emotion detection through facial expressions has gained prominence due to its potential applications in various fields such as job interviews, therapy, and healthcare. This research aimed to assess different machine learning algorithms to determine the most effective one for emotion detection using facial expression recognition (FER) technology. Data preprocessing involved utilizing dlib to detect 68 facial landmarks, enabling spatial relationship analysis between key points. Euclidean distance was employed to measure distances between these points, focusing on specific facial regions contributing to emotions. Four machine learning algorithms, namely decision tree, logistic regression, k-nearest neighbors (KNN), and convolutional neural network (CNN), were tested. The results were evaluated using confusion matrices to determine each algorithm's accuracy and effectiveness in emotion detection.

**Introduction:**
Emotion detection plays a crucial role in various domains, including human-computer interaction, mental health diagnosis, and customer sentiment analysis. Facial expression recognition (FER) technology, leveraging machine learning algorithms, has emerged as a promising approach for automatic emotion detection. This study explores the efficacy of different machine learning algorithms in detecting emotions through facial expressions, aiming to identify the most suitable algorithm for real-world applications.

**Methodology:**
The methodology involved several key steps:

1. **Data Preprocessing:** The dataset comprised facial images annotated with 68 facial landmarks using dlib. These landmarks facilitated the measurement of spatial relationships between key facial points, crucial for accurate emotion detection.

![Face Landmarks](/src/assets/face-landmarks.png)

2. **Feature Extraction:** Euclidean distance was calculated between facial landmarks to quantify spatial relationships. This approach provided a more robust representation of facial features compared to raw pixel values, enhancing the algorithms' ability to detect subtle emotional cues.

3. **Machine Learning Algorithms:**
   - **Decision Tree:** Utilized to construct a decision tree based on feature values, but prone to overfitting due to its high complexity.
   - **Logistic Regression:** Employed for binary classification tasks, providing interpretable results but limited in handling complex relationships.
   - **K-Nearest Neighbors (KNN):** Relied on proximity-based classification, but may suffer from the curse of dimensionality.
   - **Convolutional Neural Network (CNN):** Known for its effectiveness in image classification tasks, capable of learning hierarchical features automatically.

4. **Evaluation:** The performance of each algorithm was evaluated using confusion matrices, which provided insights into classification accuracy, precision, recall, and F1-score for each emotion category.

**Results:**
The results of the comparative analysis are summarized below:

- **Decision Tree:** While initially showing promising results on training data, the decision tree algorithm suffered from overfitting, resulting in poor generalization performance on unseen data.
- **Logistic Regression:** Provided moderate performance in emotion detection but struggled with capturing nonlinear relationships between features.
- **K-Nearest Neighbors (KNN):** Demonstrated competitive performance, especially in scenarios where spatial relationships played a crucial role. However, its performance might degrade with increased dataset size.
- **Convolutional Neural Network (CNN):** Outperformed other algorithms, achieving the highest accuracy and robustness in emotion detection tasks. Its ability to automatically learn hierarchical features from raw pixel data proved advantageous in capturing complex patterns associated with different emotions.

![Confusion Matrix](/src/assets/emotion-confusion-matrix.png)

**Conclusion:**
In conclusion, this research demonstrates the effectiveness of machine learning algorithms in emotion detection using facial expressions. Among the algorithms tested, the convolutional neural network emerged as the most suitable choice, owing to its superior performance and ability to learn complex features directly from image data. Future research may focus on optimizing CNN architectures and exploring additional data augmentation techniques to further enhance emotion detection accuracy in real-world applications.