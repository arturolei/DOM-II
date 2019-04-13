# DOM II - Event Exploration

Fun Bus wants you to make their site more interactive. They are relying on you to provide 10 unique events to enhance their site. Explore the many events available to you by using the [MDN events reference](https://developer.mozilla.org/en-US/docs/Web/Events).

## Set Up The Project With Git

**Follow these steps to set up and work on your project:**

* [X] Create a forked copy of this project.
* [X] Add your project manager as collaborator on Github.
* [X] Clone your OWN version of the repository (Not Lambda's by mistake!).
* [X] Create a new branch: git checkout -b `<firstName-lastName>`.
* [X] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
* [X] Push commits: git push origin `<firstName-lastName>`.

**Follow these steps for completing your project.**

* [X] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
* [ ] Add your project manager as a reviewer on the pull-request
* [ ] Your project manager will count the project as complete by merging the branch back into master.

## Task 1: Set Up LESS Preprocessor

* [X] Verify that you have LESS installed correctly by running `lessc -v` in your terminal, if you don't get a version message back, reach out to your project manager for help.

* [X] Open your terminal and navigate to your preprocessing project by using the `cd` command

* [X] Once in your project's root folder, run the following command `less-watch-compiler less css index.less`

* [X] Verify your compiler is working correctly by changing the `background-color` on the `html` selector to `red` in your `index.less` file. **It's not index.less but in global.less**

* [X] Once you see the red screen, you can delete that style and you're ready to start on the next task

## Task 2: Create Unique Event Listeners

* [X] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
	* [X] `mouseover`
	* [X] `keydown`
	* [ ] `wheel`
	* [X] `drag / drop`
	* [X] `load`
	* [ ] `focus`
	* [X] `resize`
	* [X] `scroll`
	* [ ] `select`
	* [X] `dblclick`
	

Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

* [X] Nest two similar events somewhere in the site and prevent the event propagation properly
* [X] Stop the navigation from items from refreshing the page by using `preventDefault()`

## Stretch Task:

* [ ] Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.

## Stretch assignment

* [ ] Take a look at the [stretch assignment](stretch-assignment) and follow the instructions in the read me file.



# Reflections, Standup Report Responses II, April 13, 2019:

## Pull Request Link
https://github.com/arturolei/DOM-II/pull/1

## What did you work on today and yesterday?
I worked on reviewing the DOM-II related training material and finishing the MVP for the DOM-II project. 

## What Will You Work On Tomorrow or Need to Get Done
I need to review the TK materials for next week and maybe tackle the stretch project for DOM-I and DOM-II to make sure I am comfortable with the material.

## Blockers/Breakthroughs

### Blockers 
I ran out of ideas. The 10 unique event listeners criterion seems a bit arbitrary and not that productive. This assignment's instructions and setup were kind of unclear. 

Is there a way to add multiple event listeners to an element at once rather than serially? 

### Breakthroughs:
I feel comfortable with event listeners as a concept. I just need practice with implementation. 

