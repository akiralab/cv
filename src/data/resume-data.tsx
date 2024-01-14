import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "川井 輝",
  initials: "KT",
  location: "埼玉県, 日本",
  locationLink: "https://www.google.com/maps/place/埼玉県",
  about:
    "機械学習エンジニアとして、医療用機械学習プロダクト開発に携わる。強化学習を用いた画像認識系サービスの開発経験あり。",
  summary:
    "機械学習エンジニアとして、複数のプロジェクトで技術リードを務め、チームを率いている。現在は主にPython、Docker、C++を使用。技術スキルとプロジェクト管理能力を活かして、複数の企業で貢献。",
  avatarUrl: "src/images/icon.png",
  personalWebsiteUrl: "[あなたの個人ウェブサイトURL]",
  contact: {
    email: "kawaiakira51@gmail.com",
    tel: "[あなたの電話番号]",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/akiralab",
        icon: GitHubIcon,
      },
      // その他のソーシャルアカウント
    ],
  },
  education: [
    {
      school: "慶應義塾大学 理工学研究科",
      degree: "機械工学科 修了",
      start: "2013",
      end: "2018",
    },
  ],
  work: [
    {
      company: "株式会社AIメディカルサービス",
      link: "https://ai-medical-service.co.jp",
      badges: [],
      title: "機械学習エンジニア",
      logo: "[あなたの会社のロゴURL]",
      start: "2023",
      end: "現職",
      description:
        "医療用機械学習プロダクトの開発。技術リードとしてチームを統括。",
    },
    // その他の職歴
  ],
  skills: [
    "Python",
    "Docker",
    "C++",
    "jupyter notebook",
    "CSS",
    "HTML",
    "JavaScript",
  ],
  projects: [
    // プロジェクト情報
  ],
} as const;

