# Welcome to the Use .gitignore exercise!

This exercise checks your knowledge on using a `.gitignore` file. It is automatically graded via a workflow once you have completed the instructions.

## About this exercise

:warning: A grading script exists under `.github/workflows/grading.yml`. You do not need to use this workflow for any purpose and **altering its contents will affect the repository's ability to assess your exercise and give feedback.**

:warning: This exercise utilizes [GitHub Actions](https://docs.github.com/en/actions), which is free for public repositories and self-hosted runners, but may incur charges on private repositories. See _[About billing for GitHub Actions]_ to learn more.

:information_source: The use of GitHub Actions also means that it may take the grading workflow a few seconds and sometimes minutes to run.

## Instructions

<!-- Specific instructions for your exercise -->

Please complete the instructions below:

1. Create your own copy of this repository by using the [Use this template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template) button.
2. Edit the `.gitignore` file at the root of the repository so that it meets the following conditions:
   - Ignores all files starting with the letter `z`.
   - Ignores a file called `.env`.
   - Ignores a top-level directory named `artifacts`.

<!-- Add your steps below starting with step 2 -->

## Seeing your result

Your exercise is graded automatically once you have completed the instructions. To see the result of your exercise, go to the **Actions** tab, and see the most recent run on the **Grading** workflow. <!-- specify expected Looking Glass display_type --><!-- specific place to look -->

Below is an example of an incorrect solution and the feedback provided in the **Grading results:** 

![Screen Shot 2021-06-10 at 12 44 21 PM](https://user-images.githubusercontent.com/6351798/121580870-7822aa00-c9ea-11eb-855e-f839852566c6.png)


See _[Viewing workflow run history]_ if you need assistance.

## Troubleshooting

If you are stuck with a step in the exercise or the grading workflow does not automatically run after you complete the instructions, run the troubleshooter: in the **Actions** tab select the **Grading workflow**, click **Run workflow**, select the appropriate branch, and click the **Run workflow** button.

![Screen Shot 2021-06-10 at 12 59 28 PM](https://user-images.githubusercontent.com/6351798/121582006-bd93a700-c9eb-11eb-9576-9ec644b8f701.png)

The troubleshooter will either display useful information to help you understand what you might have done wrong in your exercise or redirect you to the documentation relevant to your exercise to help you out.

See _[Running a workflow on GitHub]_ if you need assistance.

## Useful resources

Use these to help you!

Resources specific to this exercise:

- [Pattern format for .gitignore - git Docs]

<!-- - Add further resources for the learner -->

Resources for working with exercises and GitHub Actions in general:

- [Creating a repository from a template]
- [Viewing workflow run history]
- [Running a workflow on GitHub]
- [About billing for GitHub Actions]
- [GitHub Actions]

<!--
Links used throughout this README:
-->
<!-- Edit the links below to be relevant -->

[creating a repository from a template]: https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
[viewing workflow run history]: https://docs.github.com/en/actions/managing-workflow-runs/viewing-workflow-run-history
[running a workflow on github]: https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow#running-a-workflow-on-github
[about billing for github actions]: https://docs.github.com/en/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions
[github actions]: https://docs.github.com/en/actions
[pattern format for .gitignore - git docs]: https://git-scm.com/docs/gitignore#_pattern_format
