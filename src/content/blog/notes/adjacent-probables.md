---
title: Adjacent probables
description: The adjacent possibility space can be ordered using conditional probability
date: 2024-10-26
image: { src: '/adjacent-probables.png', alt: 'Adjacent probabilities' }
duration: 5 mins.
tag: note
---

## 1. Understanding "adjacent possibility" Spaces

**Adjacent possibility spaces** in innovation refer to the set of opportunities that are closely related to a company's existing products, services, technologies, or markets. These are the extensions or evolutions of what a company already does well, leveraging existing capabilities to explore new areas with reduced risk compared to entirely new ventures.

**Key Characteristics:**
* **Proximity to core competencies:** They build on what the organization already excels at
* **Lower risk:** Leveraging existing resources and knowledge reduces uncertainty
* **Strategic fit:** Aligns with the company's overall strategy and vision

## 2. Translating to probability theory

To model "adjacent possibility" spaces using probability theory, we cam focus on assessing the likelihood of various adjacent opportunities being successful or viable. This involves quantifying uncertainty and updating our beliefs based on new information—key.

### Key concepts to utilize:
* **Bayesian probability:** Allows updating the probability estimate as more evidence becomes available
* **Conditional probability:** The probability of an event given that another event has occurred

## 3. Developing an "adjacent probability" framework

### Step 1: Define the scope of adjacent possibilities

Identify and categorize the potential adjacent opportunities based on your organization's current capabilities. For example:
* **Market adjacent:** Expanding into related markets
* **Product adjacent:** Developing new products related to existing ones
* **Technology adjacent:** Leveraging existing technologies to innovate

### Step 2: Identify relevant variables and factors

Determine the factors that influence the success of each adjacent possibility. These could include:
* **Market demand**
* **Technological feasibility**
* **Competitive landscape**
* **Resource availability**

### Step 3: Assign prior probabilities

For each adjacent possibility, assign a prior probability representing your initial belief in its potential success based on historical data, expert judgment, or industry benchmarks.

$$
P(Success | Adjacent Possibility) = Prior Probability
$$

### Step 4: Incorporate conditional probabilities

Assess how different factors influence the success of each adjacent possibility. For example, the probability of success given high market demand:

$$
P(Success \mid Market\ Demand, Adjacent\ Possibility)
$$

Use conditional probabilities to model these relationships.

### Step 5: Update beliefs with bayesian inference

As new information becomes available (e.g., market research, pilot project results), update your probabilities using Bayes' Theorem:

$$
P(Success \mid Evidence, Adjacent\ Possibility) = \frac{P(Evidence \mid Success, Adjacent\ Possibility) \cdot P(Success \mid Adjacent\ Possibility)}{P(Evidence \mid Adjacent\ Possibility)}
$$

This updated probability (posterior) reflects the revised belief in the success of the adjacent possibility after considering the new evidence.

### Step 6: Prioritize adjacent possibilities

Compare the posterior probabilities across different adjacent possibilities to prioritize which ones to pursue. Higher posterior probabilities indicate more promising opportunities.

## 4. Formulating the framework

Here's a high-level formulaic representation of the "Adjacent Probability" framework:

1. **Identify adjacent possibilities** \\[(A_1, A_2, ..., A_n)\\]
2. **Assign prior probabilities \\[(P(Success \mid A_i)\)\\] for each $$A_i$$**
3. **Determine relevant evidence $$\(E_1, E_2, ..., E_m\)$$**
4. **Calculate conditional probabilities $$\(P(E_j \mid Success, A_i)\)$$**
5. **Apply Bayes' theorem to update probabilities:**

$$
P(Success \mid E_j, A_i) = \frac{P(E_j \mid Success, A_i) \cdot P(Success \mid A_i)}{P(E_j \mid A_i)}
$$

6. **Aggregate evidence if multiple factors $$\(E_1, E_2, ..., E_m\)$$**

If multiple pieces of evidence are independent, you can update sequentially or use joint probabilities:

$$
P(Success \mid E_1, E_2, ..., E_m, A_i) = \frac{P(E_1 \mid Success, A_i) \cdot P(E_2 \mid Success, A_i) \cdot ... \cdot P(E_m \mid Success, A_i) \cdot P(Success \mid A_i)}{P(E_1, E_2, ..., E_m \mid A_i)}
$$

7. **Prioritize based on posterior probabilities**

## 5. Illustrative example

Let's walk through a simplified example to illustrate the framework.

### Scenario:
Your company manufactures smartphones and is considering two adjacent possibilities:
1. **Wearable devices (A₁)**
2. **Smart-home devices (A₂)**

### Step 1: Assign prior probabilities
* $$P(Success \mid A₁) = 0.6$$
* $$P(Success \mid A₂) = 0.4$$

### Step 2: Identify relevant evidence
* **Market research positive $$\(E_1\)$$**
* **Technology readiness $$\(E_2\)$$**

### Step 3: Conditional probabilities
For wearable devices <span class="inline-katex">$$\(A₁\)$$</span>:
* $$P(E_1 \mid Success, A₁) = 0.8$$
* $$P(E_2 \mid Success, A₁) = 0.7$$

For smart-home Devices <span class="inline-katex">$$\(A₂\)$$</span>:
* $$P(E_1 \mid Success, A₂) = 0.6$$
* $$P(E_2 \mid Success, A₂) = 0.5$$

Assume <span class="inline-katex">$$ P(E_1 \mid A_i) = 0.7$$</span> and <span class="inline-katex">$$P(E_2 \mid A_i) = 0.6$$</span> for both <span class="inline-katex">$$\(A₁\)$$</span> and <span class="inline-katex">$$\(A₂\)$$</span>

### Step 4: Update probabilities with Bayes' theorem

**For wearable devices <span class="inline-katex">$$\(A₁\)$$</span>:**

$$
P(Success \mid E_1, A₁) = \frac{0.8 \times 0.6}{0.7} \approx 0.686
$$

$$
P(Success \mid E_1, E_2, A₁) = \frac{0.7 \times 0.686}{0.6} \approx 0.8
$$

**For Smart-home devices <span class="inline-katex">$$\(A₂\)$$</span>:**

$$
P(Success \mid E_1, A₂) = \frac{0.6 \times 0.4}{0.7} \approx 0.343
$$

$$
P(Success \mid E_1, E_2, A₂) = \frac{0.5 \times 0.343}{0.6} \approx 0.286
$$

### Step 5: Prioritize based on posterior probabilities
* **Wearable devices:** 80% probability of success
* **Smart-home devices:** 28.6% probability of success

**Conclusion:** Based on the updated probabilities, pursuing wearable Devices is a more promising adjacent possibility

## 8. Summary

By integrating Bayesian probability into the exploration of adjacent possibility spaces, you create a dynamic and evidence-based approach to innovation. This framework not only quantifies the uncertainty inherent in exploring new opportunities but also provides a systematic method for updating beliefs and making informed strategic decisions.
