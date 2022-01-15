# Style Framework

## Table of contents

1. [What is ITCSS?](#what-is-itcss)
2. [Overview](#overview)

<a id="what-is-itcss"></a>
## What is ITCSS?

---

> ITCSS stands for _Inverted Triangle CSS_ and it helps you to organize your project CSS files in such way that you can better **deal with** (not always easy-to-deal with) CSS specifics like **global namespace, cascade and selectors specificity**.
>
> — Lubos Kmetko, in [ITCSS: Scalable and Maintainable CSS Architecture](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)

It was created by [Harry Roberts](https://csswizardry.com/) and it works very well with methodologies
like [BEM](https://en.bem.info/methodology/css/), [SMACSS](https://smacss.com/)
or [OOCSS](https://github.com/stubbornella/oocss/wiki).

Check out [INUITCSS](https://github.com/inuitcss/inuitcss) to see the best example of ITCSS.

<a id="overview"></a>
## Overview

---

ITCSS is a certain way of structuring Sass files to minimise rewriting/undoing code, and to maximise scalability. IT
stands for Inverted Triangle, which is the basis of the code structure. In our master Sass file, rules which broadly
affect elements on the page are imported at the top. As specificity grows, the further down the file the rules will be
imported.

![Specificity triangle - ITCSS Layers](http://i.imgur.com/okdOFdK.png)

### Learn more about ITCSS

- [Manage large CSS projects with ITCSS](https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528)
  , Harry Roberts - Creative Bloq
- [Managing CSS Projects with ITCSS](https://youtu.be/1OKZOV-iLj4), Harry Roberts - YouTube
- [INUITCSS Project](https://github.com/inuitcss/inuitcss), Harry Roberts - GitHub

### Framework Layers

- **Settings** – used with preprocessors and contain font, colors definitions, etc.
- **Tools** – globally used mixins and functions. It’s important not to output any CSS in the first 2 layers.
- **Generic** – reset and/or normalize styles, box-sizing definition, etc. This is the first layer which generates
  actual CSS.
- **Elements** – styling for bare HTML elements (like H1, A, etc.). These come with default styling from the browser so
  we can redefine them here.
- **Objects** – class-based selectors which define undecorated design patterns, for example media object known from
  OOCSS
- **Components** – specific UI components. This is where the majority of our work takes place and our UI components are
  often composed of Objects and Components
- **Utilities** – utilities and helper classes with ability to override anything which goes before in the triangle, eg.
  hide helper class
