# Logimage

Jeux de rélflexion Logimage

## Getting Started

Install Amber and create an Amber project,
as shown in [Amber Instructions](https://lolg.it/amber/amber#prerequisites).

## Use Logimage as a library in a client project

If not already present, create a client project
in an empty directory with `amber init`.

In a client project, run

```sh
bower install Logimage --save
grunt devel
amber serve
```

Go to `http://localhost:4000/` in your browser and
in all packages that use Logimage,
add `'amber-logimage/Logimage'` to the package imports,
save the change and commit the package. Reload.

## Contributing

To bring project alive (for example after `git clone`):

```sh
npm install
bower install
grunt devel
```

Developing the project (after brought alive):
 
Start server with `amber serve` and go to `http://localhost:4000/` in your browser and follow the instructions

## How to use

* Resolve a logimage
|l| l = Logimage question. Strategist new solve: l. Application new show: l

* Create quickly some objects to test:
** Line new: '1 1|   |'
** Line hint: '1 1' cells: '   '
** Cells new: '   '
** Hint new: #(1 1)
** Hint new: '1 1'
** ...

* Test a strategy
StratAllDone analyse: '1 1|   |'
