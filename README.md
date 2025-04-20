# Neobrutalism Vue

These are some basic Vue components that you can use to build your Neobrutalism themed project. I was looking for something similar but couldn't find it specifically for Vue, only the React version, which you can find here: https://www.neobrutalism.dev

Speaking of which, all credits go to ekmas and his contributors. All of my design inspiration / reference comes from his project. All of the design and functionality ideas are exclusively inspired by his amazing library. 

The only thing I have done is write some very basic components in Vue using his styling template. I am not an expert in Vue, the components are very basic and may require additional work before it is safe to be ran inside a production environment.

# Installation


# Tailwind config

Tailwind.config.js:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neobrutalism: {
          light: "rgb(227, 223, 242)",
          DEFAULT: "rgb(163, 136, 238)",
        }, 
      },
    },
  },
  plugins: [],
};
```

Other colors you might like to use (again, all taken from Ekmas's project):
```js
// Blue:    
neobrutalism: { light: "rgb(223, 229, 242)", DEFAULT: "rgb(136, 170, 238)" },

// Orange:  
neobrutalism: { light: 'rgb(255, 244, 224)', DEFAULT: 'rgb(253, 151, 69)' },

// Yellow:  
neobrutalism: { light: 'rgb(254, 242, 232)', DEFAULT: 'rgb(255, 220, 88)' },

// Red:     
neobrutalism: { light: 'rgb(252, 215, 215)', DEFAULT: 'rgb(255, 107, 107)' },

// Green:   
neobrutalism: { light: 'rgb(224, 231, 241)', DEFAULT: 'rgb(163, 230, 54)' },

// Purple:  
neobrutalism: { light: 'rgb(227, 223, 242)', DEFAULT: 'rgb(163, 136, 238)' },
```

## Styling template

Background Colors (tailwind predefined):
```
bg-neobrutalism
bg-neobrutalism-light
```

Border:
```
border-[2px] border-black
```

Borders (with shadow):
```
rounded-lg border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
```

Border (with shadow) hovering:
```
hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition duration-150 ease-in-out
```

Element scaling
```
w-full h-10 px-4 py-2
```

# Components

Below are a list of all components, what they look like and how to use them.

## Accordion

![Accordion](https://www.upload.ee/image/17776953/Animation.gif)

```js
import Accordion from "@/components/Accordion.vue";

<Accordion title="Is it accessible?">
Yes! This accordion is fully accessible.
</Accordion>
```


## Button

![Button](https://www.upload.ee/image/17776961/Button.gif)
```js
import Button from "@/components/Button.vue";

<Button>Primary</Button>
<Button type="secondary">Secondary</Button>
<Button type="destructive">Destructive</Button>
```
## Alert

![Alert](https://www.upload.ee/image/17776973/Alert_2.png)

```js
import Alert from "@/components/Alert.vue";

<Alert title="Primary">
    <p class="text-sm font-base">
        You can add components and dependencies to your app using the cli.
    </p>
</Alert>

<Alert title="Secondary" type="secondary">
    <p class="text-sm font-base">
        You can add components and dependencies to your app using the cli.
    </p>
</Alert>

<Alert title="Destructive" type="destructive">
    <p class="text-sm font-base">
        You can add components and dependencies to your app using the cli.
    </p>
</Alert>
```


## AlertDialog

![Alert Dialog](https://www.upload.ee/image/17776968/Alert.gif)

```js
import Alert from "@/components/Alert.vue";
import Button from "@/components/Button.vue";

const showAlert = ref(false);
const handleSave = async () => {
  console.log("Clicked 'save' button in the alert.");
};
```
```html
<Button type="secondary" @click="showAlert = !showAlert">
    Show Alert
</Button>

<AlertDialog
    v-if="showAlert"
    title="Save Changes"
    close-button-text="Cancel"
    action-button-text="Save"
    :action-function="handleSave"
    @close="showAlert = false"
>
    Do you want to save your changes?
</AlertDialog>
```

## Skeleton and Avatar

![Skeleton and avatar](https://www.upload.ee/image/17776974/Skeleton.gif)

```js
import Avatar from "@/components/Avatar.vue";
import Skeleton from "@/components/Skeleton.vue";

<Avatar />
<Skeleton />
```

## Badge

![Badge](https://www.upload.ee/image/17776976/badge.png)

```js
import Badge from "@/components/Badge.vue";

<Badge type="primary">Primary</Badge>
<Badge type="secondary">Secondary</Badge>
<Badge type="destructive">Destructive</Badge>
```

## Breadcrumbs

![Breadcrumbs](https://www.upload.ee/image/17776983/Breadcrumbs.png)

```js
import Breadcrumb from "@/components/Breadcrumb.vue";

const breadcrumbItems = [
  { label: "One", url: "#" },
  { label: "Two", url: "#" },
  { label: "Three", url: "#" },
];

// More than three breadcrumbs will split the sections:
const breadcrumbItems2 = [
  { label: "One", url: "#" },
  { label: "Two", url: "#" },
  { label: "Three", url: "#" },
  { label: "Four", url: "#" },
  { label: "Five", url: "#" },
];

```

```html
<Breadcrumb :items="breadcrumbItems" />
<Breadcrumb :items="breadcrumbItems2" />
```

## Calendar

![Calendar](https://www.upload.ee/image/17776990/Calendar.gif)

```js
import Calendar from "@/components/Calendar.vue";

const selectedDate = ref(new Date());
const handleDateSelected = (formattedDate) => {
  console.log("Selected date:", formattedDate);
};

<Calendar v-model="selectedDate" @dateSelected="handleDateSelected" />
```

## Card

![Card](https://www.upload.ee/image/17777002/Card.png)

```js 
import Card from "@/components/Card.vue";

<Card>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, enim.
    Amet, consectetur itaque expedita culpa totam ullam ducimus fugiat nihil
    eius? Maiores ad recusandae voluptas odit odio corrupti est vero!
</Card>
```

## Carousel

![Carousel](https://www.upload.ee/image/17777003/Carousel.gif)

```js
import Carousel from "./components/Carousel.vue";

const slides = ref([
  "<div>Content 1</div>",
  "<div>Content 2</div>",
  "<div>Content 3</div>",
]);

<Carousel :slides="slides" />
```

## Checkbox

![Checkbox](https://www.upload.ee/image/17781191/checkbox.png)

```js
import Checkbox from "./components/Checkbox.vue";

const isChecked = ref(false);

<Checkbox v-model="isChecked" />
<Checkbox v-model="isChecked" :checked="true" /> // :checked prop for default value
```


## Collapsible

![Collapsible](https://www.upload.ee/image/17781200/collapsible.gif)

```js
import Collapsible from "./components/Collapsible.vue";

const collapsibleOptions = ref(['Option 1', 'Option 2', 'Option 3', 'Option 4']);

<Collapsible :options="collapsibleOptions"> Click here to collapse the options! </Collapsible>
```

## Combobox

![Combobox](https://www.upload.ee/image/17781203/Combobox.gif)


```js
import Combobox from "./components/Combobox.vue";

const collapsibleOptions = ref(['Option 1', 'Option 2', 'Option 3', 'Option 4']);
const comboboxModel = ref('');

<Combobox 
  title="Options" 
  :items="collapsibleOptions" 
  v-model="comboboxModel" 
  :modelValue="comboboxModel"
/>      
```
