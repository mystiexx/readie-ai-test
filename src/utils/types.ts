export type Certification = {
    name: string;
    provider: string;
    relevance: string;
}

export type Company = {
    name: string;
    location: string;
    website: string,
    match_reason: string
}

export type EducationHistory = {
    years: string;
    degree: string;
    school: string;
}

export type IExperience = {
    area: string;
    description: string;
    level: string;
}

export type WorkHistory = {
    location: string;
    company: string;
    role: string;
    skills: string;
    years: string;
}

export type AssessmentResponse = {
    responseId: number;
    userId: number;
    fullName: string;
    userEmail: string;
    questionId: number;
    aiAssessmentCategory: string;
    questionType: string;
    questionText: string;
    aiUseCase: string;
    flag: string;
    answerId: number;
    answerText: string;
    scoreValue: number;
    weightagePercentage: number;
    jobRoleId: number;
    jobRoleName: string;
    industryId: number;
    industryName: string;
    userAnswerText: string;
    userScore: number;
    responseTimestamp: string; // ISO format
    correct: boolean;
  };
  

  export type CategoryStats = {
    totalQuestions: number;
    totalScore: number;
    averageScore: number;
  };
  
  export type AiAssessmentStats = {
    totalQuestions: number;
    totalScore: number;
    averageScore: number;
    minScore: number;
    maxScore: number;
    correctCount: number;
    incorrectCount: number;
    categoryStats: Record<string, CategoryStats>;
  };