# Lease steps

## Frontend engineer assignment

> We'll be using this test to assess your skill level as a frontend developer. It resembles the
> day-to-day work you’d be doing at Beequip. We estimate it will take you between 4 to 6 hours.

### Objectives and requirements

Build a simple single page app to edit lease data according to this Figma design:

[https://www.figma.com/file/79fCCNzyIhTI9T9k5e9eJv/Job-Assignment-Frontend---Modal](https://www.figma.com/file/79fCCNzyIhTI9T9k5e9eJv/Job-Assignment-Frontend---Modal)

- [x] The machine’s data should be stored somewhere in the state.
- [x] The steps in the indicator are dynamic:
  - [x] Financial and operational leases have 5 steps: machine data, supplier, rental, lease
        details, VAT financing
  - [x] Sale & leaseback-leases have 3 steps: machine data, rental, lease details
  - [x] When an object is used, an extra step for the milage is added
- [x] You don’t need to implement all steps other than the first one, just show empty pages with a
      next-button, or just the changing of the step indicator.

<b>Notes</b>

- [x] React is a requirement. The rest is up to you.
- [x] We are happy users of TypeScript. It’s optional for this assignment, but we would appreciate
      it if you tried.
- [x] Use a UI component library or write your own styles; whatever works fastest or best for you.
- [x] Automated tests are optional.
- [] The same goes for animations.
- [x] Please structure your commits and your files properly so that other developers can work with
      them.

- [] When discussing your submission, we’ll ask you about your architectural choices, what you would
  do differently, and whether you see any improvements.

### Improvement suggestions

- More tests, didn't get to writing a lot of them unfortunately
- Better styling setup with a theme, consistent spacing, colors, etc.
- Form field validation should be applied
- Pre-commit hook, for linter check
- Split up the state manager functions (`resetForm` & `updateFormState`), experimented with
  `little-state-machine` but probably makes more sense to put this in a context.
- Create a radio button component to have code in `MachineDataForm.tsx` (and reusable in other
  parts)
- Resetting the state is not fully working after submitting the form
- When closing and opening it should go back to first tab

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time.
This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel,
ESLint, etc) right into your project so you have full control over them. All of the commands except
`eject` will still work, but they will point to the copied scripts so you can tweak them. At this
point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle
deployments, and you shouldn’t feel obligated to use this feature. However we understand that this
tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
