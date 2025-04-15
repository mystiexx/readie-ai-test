import { AiAssessmentStats, AssessmentResponse, CategoryStats } from "./types";

export const getErrorMessage = (error: any) => {
  if (error.status === 400) {
    return "Bad request";
  } else if (error.status === 401) {
    return "Unauthorized";
  } else if (error.status === 403) {
    return "Forbidden";
  } else if (error.status === 404) {
    return "Not found";
  } else if (error.status === 500) {
    return "Internal server error";
  } else {
    return "Something went wrong";
  }
};

export const getYearsFrom1925 = () =>
  Array.from(
    { length: new Date().getFullYear() - 1925 + 1 },
    (_, i) => new Date().getFullYear() - i
  );

export const dataStrings = [
  {
    aiAssessmentCategory: "Ethical Considerations",
    questionText:
      "What ethical concerns arise when implementing AI in this role?",
    aiUseCase: "AI ethics and responsible AI",
    answerText:
      "[No ethical concerns~Data privacy risks~Bias in AI models~Transparency issues~Ensuring fairness and accountability]",
    userScore: 4,
  },
  {
    aiAssessmentCategory: "Ethical Considerations",
    questionText: "How should AI be used responsibly in this industry?",
    aiUseCase: "AI ethics and responsible AI",
    answerText:
      "[No oversight~Minimal regulation~Follow ethical AI guidelines~Ensure transparency and fairness~Strict compliance with ethical AI policies]",
    userScore: 3,
  },
  {
    aiAssessmentCategory: "General AI Awareness",
    questionText: "What impact does AI have in this field?",
    aiUseCase: "AI-driven decision support",
    answerText:
      "[No impact~Used for small tasks~Improves efficiency~Enables new capabilities~Revolutionizes the industry]",
    userScore: 3,
  },
  {
    aiAssessmentCategory: "General AI Awareness",
    questionText: "Which AI technology is most transformative in this role?",
    aiUseCase: "AI-driven decision support",
    answerText:
      "[Basic algorithms~Pattern recognition~Machine learning~Deep learning~AI-powered automation]",
    userScore: 3,
  },
  {
    aiAssessmentCategory: "Future Learning",
    questionText:
      "How should professionals in this role stay updated on AI advancements?",
    aiUseCase: "Continuous AI learning and upskilling",
    answerText:
      "[Ignore AI trends~Read occasional articles~Take AI certification courses~Attend AI workshops~Participate in AI research]",
    userScore: 4,
  },
  {
    aiAssessmentCategory: "Future Learning",
    questionText: "What is an emerging AI trend in this field?",
    aiUseCase: "Continuous AI learning and upskilling",
    answerText:
      "[No new trends~More automation~AI-assisted processes~AI-driven decision-making~Autonomous AI applications]",
    userScore: 4,
  },
  {
    aiAssessmentCategory: "Workplace Adaptation",
    questionText: "How can AI be integrated into daily tasks for this role?",
    aiUseCase: "AI integration into workflows",
    answerText:
      "[No AI integration~Basic AI assistance~AI-powered analytics~Adaptive AI systems~Fully AI-driven workflows]",
    userScore: 5,
  },
  {
    aiAssessmentCategory: "Workplace Adaptation",
    questionText:
      "What is a key consideration when adopting AI in the workplace?",
    aiUseCase: "AI integration into workflows",
    answerText:
      "[Ignore AI impact~Use AI for cost-cutting only~Ensure efficiency and transparency~Balance AI and human work~Implement AI ethically and inclusively]",
    userScore: 5,
  },
];

export const parseAnswers = (text: string) => {
  return text.replace(/[\[\]]/g, "").split("~");
};

export const getAssessmentsSummary = (
  data: AssessmentResponse[]
): AiAssessmentStats => {
  const totalQuestions = data?.length;
  const totalScore = data?.reduce((a: any, b: any) => a + b?.userScore, 0);
  const scores = data.map((item: any) => item?.userScore);
  const minScore = Math.min(...scores);
  const maxScore = Math.max(...scores);
  const correctCount = data?.filter((item: any) => item.correct).length;
  const incorrectCount = totalQuestions - correctCount;

  const categoryStats: Record<string, CategoryStats> = {};

  data?.forEach((item: any) => {
    const category = item.aiAssessmentCategory;
    if (!categoryStats[category]) {
      categoryStats[category] = {
        totalQuestions: 0,
        totalScore: 0,
        averageScore: 0,
      };
    }

    categoryStats[category].totalQuestions += 1;
    categoryStats[category].totalScore += item.userScore;
  });

  Object.keys(categoryStats).forEach((category) => {
    const { totalScore, totalQuestions } = categoryStats[category];
    categoryStats[category].averageScore = totalScore / totalQuestions;
  });

  return {
    totalQuestions,
    totalScore,
    averageScore: totalScore / totalQuestions,
    minScore,
    maxScore,
    correctCount,
    incorrectCount,
    categoryStats,
  };
};
