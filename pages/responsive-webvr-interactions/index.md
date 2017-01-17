# A model for responsive interactions for WebVR experiences.



## Design goal

There should be a minimum common set of interactions that can be shared across any webvr compatible devices from desktop through to full motion controled VR.



## Why this is important

* Experience should be accessible as possible.  That means making sure that anyone with a compatible device should be able to experience WebVR content.
* Progressive enhancement that will scale up to better capabilities of various VR devices.
* Prototyping on the go when you don't have access to your full VR rig.



## First class interactions

### looking around

* ability to look around the 360deg environment.

| Input         | Interaction
| ------------- | -------------
| mouse | click and drag
| gamepad | analogue stick
| vr-headset | look-around

#### events

* gaze-change (position, orientation)


### Hover scene object

* to highlight interactable object.
* present additional information before interacting with object.

| Input         | Interaction
| ------------- | -------------
| desktop | mouse-hover (or gaze-reticule hover)
| cardboard | gaze-reticule on object
| daydream | lazer wand on object
| full motion | controller collision with hover-zone

#### events

* hover-over (scene object or cursor)
* hover-out (scene object or cursor)


### interact with scene object

* Invoke action.

| Input         | Interaction
| ------------- | -------------
| mouse | gaze-cursor mouse-primary-click
| gamepad | gaze-reticule primary button press.
| cardboard | gaze hover fuse.
| daydream | lazer wand, primary button press.
| full motion | controller collision and primary button.

#### events

* invoke-action
* invoke-pressed
* invoke-release



## Secondary interactions

Secondary actions are performed through a tool panel.
Teleport

### Moving around

Move to arbitrary location within scene.

| Input         | Interaction
| -------------  | -------------
| mouse | select teleport control from menu, gaze to location, left-click to teleport.
| keyboard | arrow/asdw keys.
| gamepad   | button select teleport control, gaze to location to teleport, button to teleport.
| cardboard | gaze and fuse-cursor teleport control, fuse-cursor gaze to location to teleport.
| daydream 3dof | wand and primary-button select teleport control, wand to teleport location, primary-button to teleport.
| full motion | secondary button/touchpad to initiate teleport, wand to location, secondary release to teleport.


### Picking and placing objects.

Pickup and place object within a scene.

| Input         | Interaction
| -------------  | -------------
| mouse | right-click to pickup, right-click to drop.
| gamepad | secondary to pickup, secondary to drop.
| cardboard | gaze and fuse cursor pick object control, fuse-cursor gaze to object, fuse-cursor-hold-still to drop.
| daydream | app-button to pickup, app-button to drop.
| full motion | grip to pickup, grip to drop.
