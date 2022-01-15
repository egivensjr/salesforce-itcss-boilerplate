# Pull Request Templates

Making a good pull request starts in your local environment when you commit your work. So the first step is to make good commits.

## Table of contents

1. [Step 1: Make Good Commits](#good-commits)
2. [Step 2: Give a meaningful title to your Pull Request](#meaningful-title)
3. [Step 3: Describe what you’ve done](#describe)
4. [Bug Fix PR Example](#bug-fix-example)
5. [Adding A New Feature PR Example](#add-new-feature-example)
6. [General PR Example](#general-pr-example)

<a name="good-commits"></a>
### Step 1: Make Good Commits
A good commit is a reference where you can go back and run the project with no problems. It functions like a working snapshot at a certain point of time. So make sure that the project is working whenever you do a commit.

A good commit does one thing. Try to make multiple commits that represents multiple independent changes. For example, let’s say you’re developing a page that displays a list of articles that comes from an API. Creating multiples commits can look like:
- Create articles page component
- Create service to get articles from API
- Create article card component with style
- Add components and service tests

This way, the reviewer has already the headlines of what you’ve done just by looking at the commits messages. Moreover, it guides him to follow the logic you have followed to build and understand you better. And it’s definitely better than having one comment like:
- Create articles page

It doesn’t tell you whether it’s an empty page, a page with static data or a page with real data, and it doesn’t tell whether you tested your code or not. Every information needs reading the changes.

If you are afraid of creating too much commits for each feature, and don’t want to be drawn in commits that has no purpose in your main branch, you can use squash and merge instead of merge. Your pull request’s commits will be squashed into a single commit (that you can specify in the pull request), and they just serve at the code review stage.


<a id="meaningful-title"></a>
### Step 2: Give a meaningful title to your Pull Request
The title of the pull request should explain the purpose of the changes at a high level. It shows the general context and tells why the changes should be made to the project.

Here is a suggestion of Pull Request naming convention:
- Short and informative: serves as a summary
- Prefixed with corresponding ticket/story id (e.g. from Jira, Trello, GitHub issue, etc.)
- Prefixed also with [Frontend], [Backend], [DevOps], etc.
- Written in imperative present tense

Example: #777 [Frontend] add articles page

This title above, even before clicking the pull request to see details, clearly tells you that this pull request consists of adding a new page for displaying articles in the frontend and gives you the ID of the corresponding user story or ticket to check it out.



<a name="describe"></a>
### Step 3: Describe what you’ve done
Documenting pull requests is important, similarly to how documenting your code is. It’s a reference to the history and understanding of the changes made to the application. Moreover, if it’s done well, it gives code reviewers and testers more confidence in really knowing what’s going on.

Your pull request description should be the answer to those questions:
- What is the feature?
- How you implemented the solution?
- Does it impact any other area of the project?
- Any changes in the UI (Screenshots)?
- How to test the feature (A test scenario or any new setup)?

If it’s frontend, it is very helpful to attach screenshots of the feature, screenshots of the mock-ups, or screens before and after fixing bugs, which allows reviewers to validate the work without having to pull the branch and do a bunch of unnecessary work that takes time.

It can be useful also to tell the testers or reviewers how to deal with the feature, how to test it or if there is some new environment setup that should be done to test the feature.


---
<a name="bug-fix-example"></a>
# Bug Fix PR Example
- Summary
(How to reproduce the bug?)
(What was the reason?)
(What is the solution?)

## Checklist
- [ ] I fixed|updated|added unit tests and integration tests for each feature (if applicable).
- [ ] No error nor warning in the console.
- [ ] I joined a screenshot of the app before and after the fix.
  [upload the screenshot here]

---
<a name="add-new-feature-example"></a>
# Adding A New Feature PR Example 
- Summary
(Summarize the changes that have been made to the platform)

## Checklist
- [ ] I fixed|updated|added unit tests and integration tests for each feature (if applicable).
- [ ] No error nor warning in the console.
- [ ] I joined a screenshot of developed feature (if applicable).
  [upload the screenshot here]

---
<a name="general-pr-example"></a>
## General PR Example

### What is the feature?
(Describe what the feature is)

### What is the solution?
(Describe at a high level how the feature was implemented)

### What areas of the site does it impact?
(Describe what parts of the site are impacted and*if*code touched other areas)

### How to test?
(Describe the prerequisites and the steps to test)

## Other Notes
(Add any additional information that would be useful to the developer or QA tester)
