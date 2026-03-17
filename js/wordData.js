// Python 学习核心知识点数据
const WordRoots = [
  // ========== 基础篇 (1-15) ==========
  {
    id: 1,
    root: "Python 简介",
    origin: "基础篇",
    meaning: "一种简洁优雅的高级编程语言",
    description: "Python 由 Guido van Rossum 于 1991 年创建，以其简洁的语法和强大的功能著称。它强调代码可读性，使用缩进来定义代码块，非常适合编程初学者。Python 广泛应用于 Web 开发、数据分析、人工智能、自动化脚本等领域。",
    examples: [
      { word: "Hello World", meaning: "第一个 Python 程序", breakdown: { root: "入门" }, explanation: "print('Hello, World!') - 学习任何编程语言的第一步" },
      { word: "交互式环境", meaning: "Python REPL", breakdown: { root: "工具" }, explanation: "在命令行输入 python 即可进入，可以逐行执行代码" },
      { word: "脚本文件", meaning: ".py 文件", breakdown: { root: "文件" }, explanation: "将代码保存为.py 文件，用 python 文件名.py 运行" }
    ],
    quiz: {
      question: "Python 使用什么来定义代码块？",
      options: ["大括号 {}", "缩进", "分号 ;", "关键字 begin/end"],
      correctAnswer: 1
    }
  },
  {
    id: 2,
    root: "变量与数据类型",
    origin: "基础篇",
    meaning: "存储数据的容器，Python 有多种内置数据类型",
    description: "变量是存储数据的容器，无需声明类型（动态类型）。Python 主要数据类型包括：整数 (int)、浮点数 (float)、字符串 (str)、布尔值 (bool)、列表 (list)、元组 (tuple)、字典 (dict) 等。使用 type() 函数可以查看变量的类型。",
    examples: [
      { word: "整数", meaning: "int 类型", breakdown: { root: "数字" }, explanation: "age = 25 - 存储整数值" },
      { word: "浮点数", meaning: "float 类型", breakdown: { root: "数字" }, explanation: "price = 19.99 - 存储小数值" },
      { word: "字符串", meaning: "str 类型", breakdown: { root: "文本" }, explanation: "name = 'Python' - 存储文本，可用单引号或双引号" }
    ],
    quiz: {
      question: "以下哪个不是 Python 的基本数据类型？",
      options: ["int", "float", "char", "str"],
      correctAnswer: 2
    }
  },
  {
    id: 3,
    root: "列表 (List)",
    origin: "基础篇",
    meaning: "有序、可变的数据集合",
    description: "列表是 Python 中最常用的数据结构之一，用方括号 [] 表示。列表是有序的、可变的（可以修改），可以包含不同类型的元素。常用操作包括：append() 添加元素、remove() 删除元素、len() 获取长度、切片操作等。",
    examples: [
      { word: "创建列表", meaning: "fruits = ['apple', 'banana', 'orange']", breakdown: { root: "语法" }, explanation: "使用方括号创建，元素用逗号分隔" },
      { word: "访问元素", meaning: "fruits[0] 返回'apple'", breakdown: { root: "索引" }, explanation: "索引从 0 开始，负数索引表示从末尾计数" },
      { word: "列表切片", meaning: "fruits[1:3] 返回 ['banana', 'orange']", breakdown: { root: "操作" }, explanation: "切片语法 [start:end]，包含 start 不包含 end" }
    ],
    quiz: {
      question: "列表 fruits = [1, 2, 3, 4, 5]，fruits[2] 的值是多少？",
      options: ["1", "2", "3", "4"],
      correctAnswer: 2
    }
  },
  {
    id: 4,
    root: "字典 (Dictionary)",
    origin: "基础篇",
    meaning: "键值对 (key-value) 的无序集合",
    description: "字典用花括号 {} 表示，存储键值对。键必须是唯一的且不可变（如字符串、数字），值可以是任何类型。字典是无序的（Python 3.7+ 保持插入顺序）。常用操作：dict[key] 访问值、get() 安全访问、keys() 获取所有键、values() 获取所有值。",
    examples: [
      { word: "创建字典", meaning: "person = {'name': 'Alice', 'age': 25}", breakdown: { root: "语法" }, explanation: "键值对用冒号分隔，多个对用逗号分隔" },
      { word: "访问值", meaning: "person['name'] 返回'Alice'", breakdown: { root: "操作" }, explanation: "使用键来访问对应的值" },
      { word: "添加/修改", meaning: "person['city'] = 'Beijing'", breakdown: { root: "操作" }, explanation: "如果键不存在则添加，存在则修改" }
    ],
    quiz: {
      question: "如何安全地访问字典中可能不存在的键？",
      options: ["dict[key]", "dict.get(key)", "dict.has(key)", "dict.find(key)"],
      correctAnswer: 1
    }
  },
  {
    id: 5,
    root: "条件语句 (if-elif-else)",
    origin: "基础篇",
    meaning: "根据条件执行不同的代码块",
    description: "条件语句用于根据条件的真假来决定执行哪段代码。if 后面跟条件表达式，elif 用于多个条件分支，else 用于所有条件都不满足时的默认分支。条件表达式返回布尔值 (True/False)。注意：Python 使用缩进来定义代码块。",
    examples: [
      { word: "简单 if", meaning: "if age >= 18: print('成年')", breakdown: { root: "语法" }, explanation: "条件为真时执行缩进的代码块" },
      { word: "if-else", meaning: "if score >= 60: print('及格') else: print('不及格')", breakdown: { root: "语法" }, explanation: "二选一执行" },
      { word: "多分支", meaning: "if 成绩>=90: A elif 成绩>=80: B else: C", breakdown: { root: "语法" }, explanation: "从上到下依次判断，执行第一个满足条件的分支" }
    ],
    quiz: {
      question: "以下哪个关键字用于多条件分支？",
      options: ["else if", "elif", "elseif", "case"],
      correctAnswer: 1
    }
  },
  {
    id: 6,
    root: "循环 (for 循环)",
    origin: "基础篇",
    meaning: "遍历序列中的每个元素",
    description: "for 循环用于遍历序列（如列表、字符串、range 等）中的每个元素。语法：for 变量 in 序列：执行代码。常与 range() 函数配合使用生成数字序列。可以使用 break 提前退出循环，continue 跳过本次循环。",
    examples: [
      { word: "遍历列表", meaning: "for fruit in fruits: print(fruit)", breakdown: { root: "语法" }, explanation: "依次访问列表中的每个元素" },
      { word: "range 循环", meaning: "for i in range(5): print(i)", breakdown: { root: "语法" }, explanation: "range(5) 生成 0,1,2,3,4" },
      { word: "enumerate", meaning: "for i, val in enumerate(list)", breakdown: { root: "技巧" }, explanation: "同时获取索引和值" }
    ],
    quiz: {
      question: "range(3, 6) 生成的数字序列是？",
      options: ["3, 4, 5, 6", "3, 4, 5", "4, 5, 6", "3, 6"],
      correctAnswer: 1
    }
  },
  {
    id: 7,
    root: "循环 (while 循环)",
    origin: "基础篇",
    meaning: "当条件为真时重复执行代码",
    description: "while 循环在条件为真时重复执行代码块。语法：while 条件：执行代码。需要确保循环体内有改变条件的语句，否则会形成死循环。while 循环适合不知道具体循环次数的场景。",
    examples: [
      { word: "计数循环", meaning: "while count < 10: count += 1", breakdown: { root: "语法" }, explanation: "当 count 小于 10 时继续循环" },
      { word: "用户输入", meaning: "while True: 获取输入; if 退出条件：break", breakdown: { root: "应用" }, explanation: "无限循环配合 break 使用" },
      { word: "else 子句", meaning: "while 条件：... else: 循环正常结束时执行", breakdown: { root: "语法" }, explanation: "循环正常结束（非 break）时执行 else 块" }
    ],
    quiz: {
      question: "如何避免 while 循环变成死循环？",
      options: ["使用 break", "在循环体内改变条件", "使用 continue", "设置定时器"],
      correctAnswer: 1
    }
  },
  {
    id: 8,
    root: "函数定义 (def)",
    origin: "基础篇",
    meaning: "将代码封装成可复用的模块",
    description: "函数是一段可重复使用的代码块，使用 def 关键字定义。函数可以有参数和返回值。定义函数不会执行代码，需要调用函数才会执行。函数提高代码的复用性和可维护性。",
    examples: [
      { word: "无参函数", meaning: "def greet(): print('Hello')", breakdown: { root: "语法" }, explanation: "定义不接受参数的函数" },
      { word: "带参函数", meaning: "def add(a, b): return a + b", breakdown: { root: "语法" }, explanation: "接受参数并返回值" },
      { word: "默认参数", meaning: "def greet(name='Guest'): ...", breakdown: { root: "语法" }, explanation: "参数有默认值，调用时可省略" }
    ],
    quiz: {
      question: "函数中用于返回值的关键字是？",
      options: ["break", "exit", "return", "yield"],
      correctAnswer: 2
    }
  },
  {
    id: 9,
    root: "字符串操作",
    origin: "基础篇",
    meaning: "处理文本数据的各种方法",
    description: "字符串是不可变的序列，支持多种操作方法。常用方法包括：upper()/lower() 大小写转换、strip() 去除空白、split() 分割字符串、join() 连接字符串、replace() 替换、find() 查找子串等。字符串支持索引和切片操作。",
    examples: [
      { word: "大小写转换", meaning: "'hello'.upper() 返回'HELLO'", breakdown: { root: "方法" }, explanation: "upper() 转大写，lower() 转小写" },
      { word: "分割字符串", meaning: "'a,b,c'.split(',') 返回 ['a','b','c']", breakdown: { root: "方法" }, explanation: "按指定分隔符分割成列表" },
      { word: "字符串格式化", meaning: "f'Hello, {name}!'", breakdown: { root: "语法" }, explanation: "f-string 是最推荐的格式化方式" }
    ],
    quiz: {
      question: "'  hello  '.strip() 的结果是？",
      options: ["'  hello  '", "'hello  '", "'  hello'", "'hello'"],
      correctAnswer: 3
    }
  },
  {
    id: 10,
    root: "模块导入 (import)",
    origin: "基础篇",
    meaning: "使用其他 Python 文件中的代码",
    description: "模块是包含 Python 代码的文件，import 语句用于导入模块。可以导入整个模块、模块中的特定函数/类，或者给模块起别名。Python 有丰富的标准库和第三方库，通过 import 可以使用这些库的功能。",
    examples: [
      { word: "导入整个模块", meaning: "import math; math.sqrt(16)", breakdown: { root: "语法" }, explanation: "使用模块名。函数名访问" },
      { word: "导入特定函数", meaning: "from math import sqrt", breakdown: { root: "语法" }, explanation: "直接使用函数名，无需模块前缀" },
      { word: "模块别名", meaning: "import numpy as np", breakdown: { root: "语法" }, explanation: "使用简短别名，方便输入" }
    ],
    quiz: {
      question: "如何给模块起别名？",
      options: ["import math alias m", "import math as m", "import m from math", "alias math as m"],
      correctAnswer: 1
    }
  },
  {
    id: 11,
    root: "异常处理 (try-except)",
    origin: "基础篇",
    meaning: "捕获和处理程序运行时的错误",
    description: "异常处理用于处理程序运行时可能出现的错误，避免程序崩溃。try 块包含可能出错的代码，except 块处理异常。可以有多个 except 处理不同类型的异常，finally 块无论是否异常都会执行。",
    examples: [
      { word: "基本异常处理", meaning: "try: 危险操作 except: 处理错误", breakdown: { root: "语法" }, explanation: "捕获所有异常" },
      { word: "指定异常类型", meaning: "try: ... except ValueError: ...", breakdown: { root: "语法" }, explanation: "只捕获特定类型的异常" },
      { word: "finally", meaning: "try: ... except: ... finally: 清理操作", breakdown: { root: "语法" }, explanation: "无论是否异常都执行的代码" }
    ],
    quiz: {
      question: "哪个块中的代码无论是否异常都会执行？",
      options: ["try", "except", "finally", "else"],
      correctAnswer: 2
    }
  },
  {
    id: 12,
    root: "文件操作 (open)",
    origin: "基础篇",
    meaning: "读取和写入文件",
    description: "使用 open() 函数打开文件，可以读取或写入。常用模式：'r' 读取、'w' 写入（覆盖）、'a' 追加、'b' 二进制模式。推荐使用 with 语句，它会自动关闭文件。读取方法：read() 全部读取、readline() 读取一行、readlines() 读取所有行。",
    examples: [
      { word: "读取文件", meaning: "with open('file.txt', 'r') as f: content = f.read()", breakdown: { root: "语法" }, explanation: "with 语句自动管理文件关闭" },
      { word: "写入文件", meaning: "with open('file.txt', 'w') as f: f.write('hello')", breakdown: { root: "语法" }, explanation: "'w'模式会覆盖原文件内容" },
      { word: "逐行读取", meaning: "for line in open('file.txt'): ...", breakdown: { root: "技巧" }, explanation: "适合处理大文件" }
    ],
    quiz: {
      question: "哪个文件模式会覆盖原文件内容？",
      options: ["'r'", "'w'", "'a'", "'x'"],
      correctAnswer: 1
    }
  },
  {
    id: 13,
    root: "列表推导式",
    origin: "基础篇",
    meaning: "简洁地创建列表的语法糖",
    description: "列表推导式提供了一种简洁的方式来创建列表。基本语法：[表达式 for 变量 in 序列]。可以添加条件过滤：[表达式 for 变量 in 序列 if 条件]。列表推导式比传统的 for 循环更简洁、更高效。",
    examples: [
      { word: "基本用法", meaning: "[x*2 for x in range(5)] 返回 [0,2,4,6,8]", breakdown: { root: "语法" }, explanation: "对每个元素执行表达式" },
      { word: "带条件", meaning: "[x for x in range(10) if x%2==0]", breakdown: { root: "语法" }, explanation: "只保留偶数" },
      { word: "嵌套推导", meaning: "[x*y for x in range(3) for y in range(3)]", breakdown: { root: "语法" }, explanation: "多重循环" }
    ],
    quiz: {
      question: "[x**2 for x in range(4)] 的结果是？",
      options: ["[1,2,3,4]", "[0,1,4,9]", "[1,4,9,16]", "[0,1,2,3]"],
      correctAnswer: 1
    }
  },
  {
    id: 14,
    root: "元组 (Tuple)",
    origin: "基础篇",
    meaning: "有序、不可变的数据集合",
    description: "元组与列表类似，但创建后不能修改（不可变）。用圆括号 () 表示。元组的不可变性使其可以作为字典的键，也适合存储不应该被修改的数据。元组解包可以同时给多个变量赋值。",
    examples: [
      { word: "创建元组", meaning: "point = (10, 20)", breakdown: { root: "语法" }, explanation: "使用圆括号，元素用逗号分隔" },
      { word: "元组解包", meaning: "x, y = (10, 20)", breakdown: { root: "技巧" }, explanation: "同时给多个变量赋值" },
      { word: "单元素元组", meaning: "single = (1,)", breakdown: { root: "语法" }, explanation: "单元素元组需要加逗号" }
    ],
    quiz: {
      question: "以下哪个操作对元组是非法的？",
      options: ["访问元素", "切片", "修改元素", "遍历"],
      correctAnswer: 2
    }
  },
  {
    id: 15,
    root: "集合 (Set)",
    origin: "基础篇",
    meaning: "无序、不重复的元素集合",
    description: "集合是无序且不重复的元素集合，用花括号 {} 表示（空集合用 set()）。集合支持数学上的集合运算：并集 (|)、交集 (&)、差集 (-)、对称差集 (^)。常用于去重和成员测试。",
    examples: [
      { word: "创建集合", meaning: "unique = {1, 2, 3, 3, 2} 结果是 {1, 2, 3}", breakdown: { root: "语法" }, explanation: "自动去重" },
      { word: "集合并集", meaning: "{1,2} | {2,3} 返回 {1,2,3}", breakdown: { root: "运算" }, explanation: "合并两个集合的所有元素" },
      { word: "集合交集", meaning: "{1,2} & {2,3} 返回 {2}", breakdown: { root: "运算" }, explanation: "获取两个集合的共同元素" }
    ],
    quiz: {
      question: "集合的主要特点是什么？",
      options: ["有序", "可重复", "无序且不重复", "可变长度"],
      correctAnswer: 2
    }
  },
  // ========== 进阶篇 (16-30) ==========
  {
    id: 16,
    root: "面向对象 (类与对象)",
    origin: "进阶篇",
    meaning: "使用类创建对象的编程范式",
    description: "面向对象编程 (OOP) 是 Python 的核心范式之一。类 (class) 是对象的模板，对象是类的实例。类包含属性（数据）和方法（函数）。使用 __init__() 方法初始化对象。self 参数代表对象实例本身。",
    examples: [
      { word: "定义类", meaning: "class Dog: def __init__(self, name): self.name = name", breakdown: { root: "语法" }, explanation: "类名通常大写，__init__是构造方法" },
      { word: "创建对象", meaning: "my_dog = Dog('Buddy')", breakdown: { root: "语法" }, explanation: "实例化类创建对象" },
      { word: "访问属性", meaning: "my_dog.name", breakdown: { root: "语法" }, explanation: "使用点号访问对象属性" }
    ],
    quiz: {
      question: "类中用于初始化的方法名是？",
      options: ["__init__", "__new__", "__start__", "__create__"],
      correctAnswer: 0
    }
  },
  {
    id: 17,
    root: "继承 (Inheritance)",
    origin: "进阶篇",
    meaning: "子类继承父类的属性和方法",
    description: "继承是 OOP 的重要特性，允许子类继承父类的属性和方法。子类可以重写父类的方法，也可以添加新的属性和方法。使用 super() 调用父类的方法。Python 支持多继承。",
    examples: [
      { word: "基本继承", meaning: "class Child(Parent): ...", breakdown: { root: "语法" }, explanation: "括号中指定父类" },
      { word: "调用父类方法", meaning: "super().__init__()", breakdown: { root: "语法" }, explanation: "使用 super() 调用父类方法" },
      { word: "方法重写", meaning: "子类定义与父类同名的方法", breakdown: { root: "技巧" }, explanation: "子类可以覆盖父类的方法" }
    ],
    quiz: {
      question: "Python 是否支持多继承？",
      options: ["不支持", "支持", "只支持两层", "需要特殊语法"],
      correctAnswer: 1
    }
  },
  {
    id: 18,
    root: "装饰器 (Decorator)",
    origin: "进阶篇",
    meaning: "在不修改原代码的情况下增强函数功能",
    description: "装饰器是修改或增强函数行为的工具。使用 @decorator 语法应用于函数。装饰器本质是接受函数并返回新函数的函数。常用于日志记录、权限验证、性能测试等场景。",
    examples: [
      { word: "基本装饰器", meaning: "@decorator def func(): ...", breakdown: { root: "语法" }, explanation: "@符号应用装饰器" },
      { word: "计时装饰器", meaning: "记录函数执行时间", breakdown: { root: "应用" }, explanation: "不修改原函数，添加计时功能" },
      { word: "带参装饰器", meaning: "@decorator(arg) def func(): ...", breakdown: { root: "语法" }, explanation: "装饰器可以接受参数" }
    ],
    quiz: {
      question: "装饰器使用哪个符号？",
      options: ["#", "@", "$", "&"],
      correctAnswer: 1
    }
  },
  {
    id: 19,
    root: "生成器 (Generator)",
    origin: "进阶篇",
    meaning: "按需生成值的特殊函数",
    description: "生成器是一种特殊的迭代器，使用 yield 语句返回值。与普通函数不同，生成器在每次迭代时生成一个值，节省内存。生成器表达式类似于列表推导式，但使用圆括号。",
    examples: [
      { word: "生成器函数", meaning: "def gen(): yield 1; yield 2", breakdown: { root: "语法" }, explanation: "使用 yield 而非 return" },
      { word: "生成器表达式", meaning: "(x*2 for x in range(5))", breakdown: { root: "语法" }, explanation: "类似列表推导式，但用圆括号" },
      { word: "遍历生成器", meaning: "for val in gen(): print(val)", breakdown: { root: "用法" }, explanation: "生成器只能遍历一次" }
    ],
    quiz: {
      question: "生成器使用哪个关键字返回值？",
      options: ["return", "yield", "give", "produce"],
      correctAnswer: 1
    }
  },
  {
    id: 20,
    root: "迭代器 (Iterator)",
    origin: "进阶篇",
    meaning: "可以逐个访问集合元素的对象",
    description: "迭代器是实现了__iter__() 和__next__() 方法的对象。可以使用 iter() 将可迭代对象转换为迭代器，使用 next() 获取下一个元素。当没有更多元素时抛出 StopIteration 异常。",
    examples: [
      { word: "创建迭代器", meaning: "it = iter([1, 2, 3])", breakdown: { root: "语法" }, explanation: "iter() 创建迭代器" },
      { word: "获取下一个", meaning: "next(it) 返回 1", breakdown: { root: "语法" }, explanation: "next() 获取下一个元素" },
      { word: "自定义迭代器", meaning: "实现__iter__和__next__方法", breakdown: { root: "进阶" }, explanation: "类可以实现迭代器协议" }
    ],
    quiz: {
      question: "当迭代器没有更多元素时会发生什么？",
      options: ["返回 None", "返回 -1", "抛出 StopIteration", "无限循环"],
      correctAnswer: 2
    }
  },
  {
    id: 21,
    root: "Lambda 函数",
    origin: "进阶篇",
    meaning: "匿名的小函数",
    description: "Lambda 函数是小型的匿名函数，使用 lambda 关键字定义。语法：lambda 参数：表达式。只能包含一个表达式，不能有复杂的逻辑。常用于需要简单函数的场景，如排序的 key 参数、map/filter 等。",
    examples: [
      { word: "基本用法", meaning: "add = lambda x, y: x + y", breakdown: { root: "语法" }, explanation: "定义简单的加法函数" },
      { word: "排序 key", meaning: "sorted(list, key=lambda x: x[1])", breakdown: { root: "应用" }, explanation: "按元组的第二个元素排序" },
      { word: "配合 map", meaning: "map(lambda x: x*2, list)", breakdown: { root: "应用" }, explanation: "对列表每个元素翻倍" }
    ],
    quiz: {
      question: "Lambda 函数可以包含多个表达式吗？",
      options: ["可以", "不可以，只能一个表达式", "最多三个", "取决于 Python 版本"],
      correctAnswer: 1
    }
  },
  {
    id: 22,
    root: "上下文管理器 (with)",
    origin: "进阶篇",
    meaning: "自动管理资源的进入和退出",
    description: "上下文管理器使用 with 语句，确保资源正确获取和释放。典型应用是文件操作，自动关闭文件。实现上下文管理器需要定义__enter__() 和__exit__() 方法。也可以使用 contextlib 装饰器创建。",
    examples: [
      { word: "文件操作", meaning: "with open('file.txt') as f: ...", breakdown: { root: "应用" }, explanation: "自动关闭文件" },
      { word: "自定义上下文", meaning: "实现__enter__和__exit__方法", breakdown: { root: "进阶" }, explanation: "类可以实现上下文管理协议" },
      { word: "多个上下文", meaning: "with open(f1) as f1, open(f2) as f2: ...", breakdown: { root: "语法" }, explanation: "同时管理多个资源" }
    ],
    quiz: {
      question: "with 语句的主要优势是什么？",
      options: ["代码更短", "自动资源管理", "执行更快", "更美观"],
      correctAnswer: 1
    }
  },
  {
    id: 23,
    root: "正则表达式 (re 模块)",
    origin: "进阶篇",
    meaning: "用于模式匹配和文本处理",
    description: "正则表达式是强大的文本匹配工具，Python 通过 re 模块提供支持。常用函数：match() 从头匹配、search() 搜索匹配、findall() 查找所有匹配、sub() 替换匹配。正则表达式语法包括字符类、量词、分组等。",
    examples: [
      { word: "基本匹配", meaning: "re.search(r'\\d+', 'abc123')", breakdown: { root: "语法" }, explanation: "搜索数字序列" },
      { word: "查找所有", meaning: "re.findall(r'\\d+', 'a1b2c3')", breakdown: { root: "语法" }, explanation: "返回所有匹配 ['1','2','3']" },
      { word: "替换", meaning: "re.sub(r'\\d', '*', 'a1b2')", breakdown: { root: "语法" }, explanation: "将数字替换为*，结果'a*b*'" }
    ],
    quiz: {
      question: "哪个函数用于查找所有匹配？",
      options: ["re.match", "re.search", "re.findall", "re.find"],
      correctAnswer: 2
    }
  },
  {
    id: 24,
    root: "多进程与多线程",
    origin: "进阶篇",
    meaning: "并发执行多个任务",
    description: "Python 支持多线程 (threading) 和多进程 (multiprocessing)。由于 GIL 限制，多线程适合 I/O 密集型任务，多进程适合 CPU 密集型任务。threading 模块用于多线程，multiprocessing 模块用于多进程。",
    examples: [
      { word: "创建线程", meaning: "threading.Thread(target=func).start()", breakdown: { root: "语法" }, explanation: "创建并启动线程" },
      { word: "创建进程", meaning: "multiprocessing.Process(target=func).start()", breakdown: { root: "语法" }, explanation: "创建并启动进程" },
      { word: "线程池", meaning: "ThreadPoolExecutor(max_workers=4)", breakdown: { root: "应用" }, explanation: "使用线程池管理多个线程" }
    ],
    quiz: {
      question: "CPU 密集型任务适合使用？",
      options: ["多线程", "多进程", "单线程", "异步 IO"],
      correctAnswer: 1
    }
  },
  {
    id: 25,
    root: "异步编程 (async/await)",
    origin: "进阶篇",
    meaning: "高效处理 I/O 密集型任务",
    description: "异步编程使用 async 和 await 关键字，适合高并发 I/O 场景。async 定义协程函数，await 等待异步操作完成。使用 asyncio 库运行异步代码。异步编程可以显著提高网络请求、文件读写等 I/O 操作的效率。",
    examples: [
      { word: "定义协程", meaning: "async def fetch(): ...", breakdown: { root: "语法" }, explanation: "async 定义异步函数" },
      { word: "等待异步", meaning: "result = await fetch()", breakdown: { root: "语法" }, explanation: "await 等待异步操作完成" },
      { word: "运行协程", meaning: "asyncio.run(main())", breakdown: { root: "语法" }, explanation: "运行异步主函数" }
    ],
    quiz: {
      question: "哪个关键字用于等待异步操作？",
      options: ["async", "await", "wait", "yield"],
      correctAnswer: 1
    }
  },
  {
    id: 26,
    root: "类型提示 (Type Hints)",
    origin: "进阶篇",
    meaning: "为代码添加类型注解",
    description: "类型提示是 Python 3.5+ 的特性，用于标注变量和函数的类型。使用 typing 模块提供复杂类型。类型提示不会在运行时检查，但可以帮助 IDE 提供智能提示，也可配合 mypy 等工具进行静态类型检查。",
    examples: [
      { word: "变量注解", meaning: "name: str = 'Python'", breakdown: { root: "语法" }, explanation: "变量名：类型 = 值" },
      { word: "函数注解", meaning: "def add(a: int, b: int) -> int:", breakdown: { root: "语法" }, explanation: "参数和返回值都可以注解" },
      { word: "复杂类型", meaning: "List[int], Dict[str, Any]", breakdown: { root: "语法" }, explanation: "使用 typing 模块的复杂类型" }
    ],
    quiz: {
      question: "类型提示会在运行时检查类型吗？",
      options: ["会", "不会", "可选", "取决于设置"],
      correctAnswer: 1
    }
  },
  {
    id: 27,
    root: "虚拟环境 (venv)",
    origin: "进阶篇",
    meaning: "隔离项目的依赖包",
    description: "虚拟环境用于隔离不同项目的 Python 依赖。每个项目可以有独立的包版本，避免冲突。使用 venv 模块创建：python -m venv env。激活后，pip 安装的包只在当前环境生效。",
    examples: [
      { word: "创建环境", meaning: "python -m venv myenv", breakdown: { root: "命令" }, explanation: "在当前目录创建虚拟环境" },
      { word: "激活环境 (Windows)", meaning: "myenv\\Scripts\\activate", breakdown: { root: "命令" }, explanation: "激活后命令行前缀显示环境名" },
      { word: "激活环境 (Mac/Linux)", meaning: "source myenv/bin/activate", breakdown: { root: "命令" }, explanation: "Unix 系统的激活方式" }
    ],
    quiz: {
      question: "虚拟环境的主要作用是什么？",
      options: ["加速 Python", "隔离依赖包", "压缩代码", "加密数据"],
      correctAnswer: 1
    }
  },
  {
    id: 28,
    root: "包管理 (pip)",
    origin: "进阶篇",
    meaning: "安装和管理 Python 包",
    description: "pip 是 Python 的包管理工具，用于安装、升级、卸载第三方包。常用命令：pip install 包名、pip uninstall 包名、pip list 查看已安装包、pip freeze 导出依赖列表。requirements.txt 文件记录项目依赖。",
    examples: [
      { word: "安装包", meaning: "pip install requests", breakdown: { root: "命令" }, explanation: "安装 requests 库" },
      { word: "导出依赖", meaning: "pip freeze > requirements.txt", breakdown: { root: "命令" }, explanation: "保存所有依赖到文件" },
      { word: "批量安装", meaning: "pip install -r requirements.txt", breakdown: { root: "命令" }, explanation: "从文件安装所有依赖" }
    ],
    quiz: {
      question: "哪个命令用于导出项目依赖？",
      options: ["pip list", "pip show", "pip freeze", "pip export"],
      correctAnswer: 2
    }
  },
  {
    id: 29,
    root: "单元测试 (unittest/pytest)",
    origin: "进阶篇",
    meaning: "自动化测试代码功能",
    description: "单元测试用于验证代码的正确性。Python 内置 unittest 模块，pytest 是更流行的第三方测试框架。测试函数通常以 test_ 开头，使用 assert 进行断言。运行测试可以自动发现并执行所有测试用例。",
    examples: [
      { word: "unittest 测试", meaning: "class TestMath(unittest.TestCase): def test_add(self): ...", breakdown: { root: "语法" }, explanation: "继承 TestCase 类" },
      { word: "pytest 测试", meaning: "def test_add(): assert add(1,2) == 3", breakdown: { root: "语法" }, explanation: "简单的函数形式" },
      { word: "运行测试", meaning: "pytest 或 python -m unittest", breakdown: { root: "命令" }, explanation: "自动发现并运行测试" }
    ],
    quiz: {
      question: "测试函数通常以什么开头？",
      options: ["check_", "verify_", "test_", "assert_"],
      correctAnswer: 2
    }
  },
  {
    id: 30,
    root: "常用标准库",
    origin: "进阶篇",
    meaning: "Python 内置的实用模块",
    description: "Python 有丰富的标准库，称为'电池内置'。常用库包括：os/sys 系统操作、json 处理 JSON 数据、datetime 日期时间、re 正则表达式、collections 高级数据结构、itertools 迭代工具、functools 函数工具等。",
    examples: [
      { word: "JSON 处理", meaning: "json.dumps() 序列化，json.loads() 反序列化", breakdown: { root: "应用" }, explanation: "Python 对象与 JSON 字符串互转" },
      { word: "日期时间", meaning: "datetime.now() 获取当前时间", breakdown: { root: "应用" }, explanation: "处理日期和时间的各种操作" },
      { word: "计数器", meaning: "from collections import Counter", breakdown: { root: "应用" }, explanation: "快速统计元素出现次数" }
    ],
    quiz: {
      question: "哪个库用于处理 JSON 数据？",
      options: ["xml", "json", "csv", "pickle"],
      correctAnswer: 1
    }
  }
];
