"use client";

import { useState } from "react";
import AnimatedElement from "~/components/animated-element";
// import { Card, CardContent } from "~/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
// import { FileText, Code } from "lucide-react";
// import ReactMarkdown from "react-markdown";
import DependencyBubble from "~/components/dependency-bubble";

// 文章数据
const articles = [
  {
    id: "react-performance",
    title: "React性能优化技巧",
    summary: "探讨React应用在规模增长后的性能优化策略",
    content: `
# React性能优化技巧

React应用在规模增长后常常会遇到性能问题。以下是一些我在实践中总结的优化技巧：

## 1. 使用React.memo避免不必要的重渲染

\`\`\`jsx
const MyComponent = React.memo(function MyComponent(props) {
  /* 渲染使用props */
});
\`\`\`

React.memo是一个高阶组件，它与React.PureComponent类似，但适用于函数组件而非类组件。如果你的函数组件在给定相同props的情况下渲染相同的结果，你可以通过将其包装在React.memo中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。

## 2. 使用useCallback缓存函数

\`\`\`jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
\`\`\`

useCallback返回一个记忆的回调函数。把内联回调函数及依赖项数组作为参数传入useCallback，它将返回该回调函数的记忆化版本，该回调函数仅在某个依赖项改变时才会更新。

## 3. 使用useMemo缓存计算结果

\`\`\`jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
\`\`\`

useMemo用于记忆计算结果。把"创建"函数和依赖项数组作为参数传入useMemo，它仅会在某个依赖项改变时才重新计算记忆值。这种优化有助于避免在每次渲染时都进行高开销的计算。

## 4. 虚拟化长列表

对于长列表，可以使用\`react-window\`或\`react-virtualized\`等库来虚拟化列表，只渲染可见区域的项目。

\`\`\`jsx
import { FixedSizeList } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

const Example = () => (
  <FixedSizeList
    height={150}
    width={300}
    itemCount={1000}
    itemSize={35}
  >
    {Row}
  </FixedSizeList>
);
\`\`\`

## 总结

性能优化应该是有针对性的，先通过性能分析工具找出瓶颈，再有针对性地进行优化。
`,
  },
  {
    id: "nextjs-best-practices",
    title: "Next.js最佳实践",
    summary: "分享使用Next.js开发应用时的最佳实践和技巧",
    content: `
# Next.js最佳实践

Next.js是一个流行的React框架，它提供了许多开箱即用的功能，如服务器端渲染、静态站点生成、API路由等。以下是一些使用Next.js的最佳实践：

## 1. 选择合适的渲染策略

Next.js提供了多种渲染策略：

- **静态站点生成(SSG)**: 适用于内容不经常变化的页面
- **服务器端渲染(SSR)**: 适用于需要实时数据的页面
- **增量静态再生(ISR)**: 结合了SSG和SSR的优点
- **客户端渲染(CSR)**: 适用于高度交互的私有页面

\`\`\`jsx
// SSG示例
export async function getStaticProps() {
  const data = await fetchData();
  return { props: { data } };
}

// SSR示例
export async function getServerSideProps() {
  const data = await fetchData();
  return { props: { data } };
}

// ISR示例
export async function getStaticProps() {
  const data = await fetchData();
  return { 
    props: { data },
    revalidate: 60 // 每60秒重新生成页面
  };
}
\`\`\`

## 2. 使用Image组件优化图片

Next.js的Image组件提供了自动图片优化，包括调整大小、格式转换和延迟加载。

\`\`\`jsx
import Image from 'next/image';

function MyImage() {
  return (
    <Image
      src="/my-image.jpg"
      alt="描述"
      width={500}
      height={300}
      priority
    />
  );
}
\`\`\`

## 3. 利用动态导入和代码分割

使用动态导入可以减少初始加载时间，只在需要时加载组件。

\`\`\`jsx
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/heavy-component'));

function MyPage() {
  return (
    <div>
      <DynamicComponent />
    </div>
  );
}
\`\`\`

## 4. 优化字体加载

Next.js 13提供了新的字体系统，可以优化字体加载并消除布局偏移。

\`\`\`jsx
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
\`\`\`

## 总结

Next.js是一个强大的框架，通过遵循这些最佳实践，可以构建高性能、SEO友好的现代Web应用。
`,
  },
  {
    id: "typescript-tips",
    title: "TypeScript高级技巧",
    summary: "分享TypeScript中的高级类型和模式",
    content: `
# TypeScript高级技巧

TypeScript为JavaScript添加了静态类型检查，提高了代码质量和开发效率。以下是一些TypeScript的高级技巧：

## 1. 高级类型

### 条件类型

\`\`\`typescript
type IsString<T> = T extends string ? true : false;

// 使用
type A = IsString<string>; // true
type B = IsString<number>; // false
\`\`\`

### 映射类型

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// 使用
interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;
\`\`\`

### 工具类型

TypeScript内置了许多有用的工具类型：

\`\`\`typescript
// 部分属性
type PartialUser = Partial<User>;

// 必选属性
type RequiredUser = Required<User>;

// 提取属性
type NameOnly = Pick<User, 'name'>;

// 排除属性
type AgeOnly = Omit<User, 'name'>;
\`\`\`

## 2. 类型守卫

类型守卫可以在运行时检查变量的类型：

\`\`\`typescript
function isString(value: any): value is string {
  return typeof value === 'string';
}

function processValue(value: string | number) {
  if (isString(value)) {
    // 在这个块中，TypeScript知道value是string类型
    return value.toUpperCase();
  }
  // 在这个块中，TypeScript知道value是number类型
  return value.toFixed(2);
}
\`\`\`

## 3. 泛型约束

使用泛型约束可以限制泛型参数的范围：

\`\`\`typescript
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(value: T): T {
  console.log(value.length);
  return value;
}

// 有效
logLength("Hello");
logLength([1, 2, 3]);

// 无效
// logLength(123); // 错误：number没有length属性
\`\`\`

## 4. 声明合并

TypeScript允许通过声明合并来扩展现有类型：

\`\`\`typescript
// 原始接口
interface User {
  name: string;
}

// 扩展接口
interface User {
  age: number;
}

// 最终User接口包含name和age属性
const user: User = {
  name: "John",
  age: 30
};
\`\`\`

## 总结

掌握这些TypeScript高级技巧可以帮助你编写更安全、更可维护的代码，充分发挥TypeScript的潜力。
`,
  },
];

const dependencies = [
  {
    name: "一个博客网站",
    // usageCount: 32,
    // description: "一个博客网站",
    proficiency: "高级" as const,
    link: "https://blog.cion.asia",
  },
  {
    name: "React",
    // usageCount: 25,
    description: "用于构建用户界面的JavaScript库，是我最常用的前端框架。",
    proficiency: "高级" as const,
  },
  {
    name: "ReactNative",
    // usageCount: 25,
    description:
      "一次学习，随处编写, 使用 React 来创建 Android 和 iOS 的原生应用",
    proficiency: "高级" as const,
  },
  {
    name: "Vue",
    // usageCount: 18,
    description: "渐进式 JavaScript 框架",
    proficiency: "高级" as const,
  },
  {
    name: "Next.js",
    // usageCount: 18,
    description:
      "基于React的全栈框架，提供SSR、SSG等功能，是我构建现代Web应用的首选。",
    proficiency: "高级" as const,
  },
  // {
  //   name: "Vue.js",
  //   // usageCount: 12,
  //   description: "渐进式JavaScript框架，用于构建用户界面，API设计简洁直观。",
  //   proficiency: "高级" as const,
  // },
  {
    name: "Mobx",
    // usageCount: 11,
    description: "JavaScript应用的状态容器，提供可预测的状态管理。",
    proficiency: "高级" as const,
  },
  {
    name: "Tailwind CSS",
    // usageCount: 15,
    description: "实用优先的CSS框架，通过类名直接构建设计，加速UI开发。",
    proficiency: "中级" as const,
  },
  {
    name: "Webpack",
    // usageCount: 14,
    description: "静态模块打包工具，用于构建现代JavaScript应用。",
    proficiency: "中级" as const,
  },
  {
    name: "Moti",
    // usageCount: 10,
    description: "RN动画库，用于创建UI动画和交互效果。",
    proficiency: "初级" as const,
  },
  {
    name: "Postgre",
    // usageCount: 7,
    description: "强大的开源关系型数据库，支持复杂查询和事务处理。",
    proficiency: "初级" as const,
  },
  {
    name: "Prisma",
    // usageCount: 6,
    description: "现代数据库ORM工具，简化了数据库操作和类型安全。",
    proficiency: "初级" as const,
  },
  {
    name: "Drizzle",
    // usageCount: 4,
    description: "TypeScript优先的ORM，提供类型安全的数据库查询构建器。",
    proficiency: "初级" as const,
  },
  {
    name: "Zod",
    // usageCount: 9,
    description: "TypeScript优先的模式验证库，用于数据验证和类型推断。",
    proficiency: "初级" as const,
  },
  {
    name: "tRPC",
    // usageCount: 5,
    description: "端到端类型安全的API框架，无需API文档或代码生成。",
    proficiency: "初级" as const,
  },
  {
    name: "Supabase",
    // usageCount: 6,
    description: "开源的Firebase替代品，提供数据库、认证和存储服务。",
    proficiency: "初级" as const,
  },

  // {
  //   name: "Cypress",
  //   // usageCount: 7,
  //   description: "端到端测试框架，用于测试Web应用的用户流程。",
  //   proficiency: "初级" as const,
  // },
  // {
  //   name: "Docker",
  //   // usageCount: 9,
  //   description: "容器化平台，用于构建、部署和运行应用。",
  //   proficiency: "初级" as const,
  // },
  // {
  //   name: "AWS",
  //   // usageCount: 8,
  //   description: "云计算平台，提供各种基础设施和服务。",
  //   proficiency: "初级" as const,
  // },
  {
    name: "Vercel",
    // usageCount: 12,
    description: "前端部署和托管平台，专为现代Web应用设计。",
    proficiency: "初级" as const,
  },
];

export default function PortfolioSection() {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  // 查找选中的文章
  const currentArticle = selectedArticle
    ? articles.find((article) => article.id === selectedArticle)
    : null;

  return (
    <div className="section from-muted/50 to-background bg-gradient-to-b">
      <div className="section-content h-full overflow-y-auto">
        <AnimatedElement animation="fade-in">
          <h2 className="section-title sticky top-0 z-10 pt-4 pb-6 backdrop-blur-sm">
            作品集
          </h2>
        </AnimatedElement>
      </div>

      <div className="mx-auto grid max-h-[calc(100vh-200px)] w-full grid-cols-1 gap-6">
        <AnimatedElement animation="slide-up">
          <DependencyBubble dependencies={dependencies} />
        </AnimatedElement>
      </div>
    </div>
  );
}
