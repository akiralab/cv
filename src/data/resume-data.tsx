import { AIM, Robit, Neo, Minimal, YearProgressLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "川井 輝",
  initials: "AK",
  location: "埼玉県, 日本",
  locationLink: "https://www.google.com/maps/place/埼玉県",
  about:
    "機械学習エンジニアとして、医療用機械学習プロダクト開発に携わる。強化学習を用いた画像認識系サービスの開発経験あり。",
  summary:
    "機械学習エンジニアとして、複数のプロジェクトで技術リードを務め、チームを率いている。現在は主にPython、Docker、C++を使用。技術スキルとプロジェクト管理能力を活かして、複数の企業で貢献。",
  avatarUrl: "https://avatars.githubusercontent.com/u/38210940?v=4",
  personalWebsiteUrl: "[あなたの個人ウェブサイトURL]",
  contact: {
    email: "kawaiakira51@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/akiralab",
        icon: GitHubIcon,
      },
      {
        name: "X",
        url: "https://x.com/akiralab3",
        icon: XIcon,
      }, // その他のソーシャルアカウント
    ],
  },
  education: [
    {
      school: "慶應義塾大学 理工学部",
      degree: "機械工学科 卒業",
      end: "2015",
    },
    {
      school: "慶應義塾大学 理工学研究科",
      degree: "開放環境科学科 修了",
      end: "2018",
    },
  ],
  work: [
    {
      company: "株式会社AIメディカルサービス",
      link: "https://ai-medical-service.co.jp",
      badges: [],
      title: "機械学習エンジニア",
      logo: AIM,
      start: "2023",
      end: "現職",
      description:
        "内視鏡用の機械学習モデルの開発。機械学習エンジニアとして製品開発業務に従事。",
    },
    {
      company: "株式会社ロビット",
      link: "https://robit.co.jp/",
      badges: [],
      title: "機械学習エンジニア",
      logo: Robit,
      start: "2020",
      end: "2023",
      description: "食品加工会社向け食品自動カットのAIアルゴリズム開発(~2年)",
    },
    {
      company: "株式会社ネオキャリア",
      link: "https://www.neo-career.co.jp/",
      badges: [],
      title: "ソフトウェアエンジニア",
      logo: Neo,
      start: "2018",
      end: "2020",
      description:
        " 商業施設向け画像認識による人流ヒートマップ計測ソフトウェア開発(~1年), \
        物流用大型ドローンによる山間部への物資輸送実験(~1年), \
         - ドローンによる点検ソフトウェア開発(~1年)",
    },

    // その他の職歴
  ],
  skills: ["Python", "Docker", "C++"],
  projects: [
    // プロジェクト情報
  ],
} as const;
