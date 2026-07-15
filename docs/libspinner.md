# libspinner

**spinner** is a C library that provides terminal spinners and progress indicators. This is a port of the Go library [here](https://github.com/briandowns/spinner).

## Build & Install

To build a shared object for your system, run:

```sh
make
```

```sh
sudo make install
```

*NOTE*: Be sure to call `spinner_stop(s)` in any signal handlers or clean up routines so the underlying pthread doesn't leak.

An example can be found in the `examples` directory.

## Test

```sh
make test
```

## Features

* Start
* Stop
* Restart
* Reverse direction [in progress]
* Update the spinner character set
* Update the spinner speed
* Prefix or append text
* Change spinner color, background, and text attributes such as bold / italics [in progress]
* Chain, pipe, redirect output
* Output final string on spinner/indicator completion

## 90 Character Sets. Some examples below:

(cursor not visible in normal operation)

| index | character set                                                                                                                                                                                                                                                                             | sample gif                 |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 0     | ```←↖↑↗→↘↓↙```                                                                                                                                                                                                                                                                            | ![Sample Gif](gifs/0.gif)  |
| 1     | ```▁▃▄▅▆▇█▇▆▅▄▃▁```                                                                                                                                                                                                                                                                       | ![Sample Gif](gifs/1.gif)  |
| 2     | ```▖▘▝▗```                                                                                                                                                                                                                                                                                | ![Sample Gif](gifs/2.gif)  |
| 3     | ```┤┘┴└├┌┬┐```                                                                                                                                                                                                                                                                            | ![Sample Gif](gifs/3.gif)  |
| 4     | ```◢◣◤◥```                                                                                                                                                                                                                                                                                | ![Sample Gif](gifs/4.gif)  |
| 5     | ```◰◳◲◱```                                                                                                                                                                                                                                                                                | ![Sample Gif](gifs/5.gif)  |
| 6     | ```◴◷◶◵```                                                                                                                                                                                                                                                                                | ![Sample Gif](gifs/6.gif)  |
| 7     | ```◐◓◑◒```                                                                                                                                                                                                                                                                                | ![Sample Gif](gifs/7.gif)  |
| 8     | ```.oO@*```                                                                                                                                                                                                                                                                               | ![Sample Gif](gifs/8.gif)  |
| 9     | ```\|/-\```                                                                                                                                                                                                                                                                               | ![Sample Gif](gifs/9.gif)  |
| 10    | ```◡◡⊙⊙◠◠```                                                                                                                                                                                                                                                                              | ![Sample Gif](gifs/10.gif) |
| 11    | ```⣾⣽⣻⢿⡿⣟⣯⣷```                                                                                                                                                                                                                                                                            | ![Sample Gif](gifs/11.gif) |
| 12    | ```>))'> >))'>  >))'>   >))'>    >))'>   <'((<  <'((< <'((<```                                                                                                                                                                                                                            | ![Sample Gif](gifs/12.gif) |
| 13    | ```⠁⠂⠄⡀⢀⠠⠐⠈```                                                                                                                                                                                                                                                                            | ![Sample Gif](gifs/13.gif) |
| 14    | ```⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏```                                                                                                                                                                                                                                                                          | ![Sample Gif](gifs/14.gif) |
| 15    | ```abcdefghijklmnopqrstuvwxyz```                                                                                                                                                                                                                                                          | ![Sample Gif](gifs/15.gif) |
| 16    | ```▉▊▋▌▍▎▏▎▍▌▋▊▉```                                                                                                                                                                                                                                                                       | ![Sample Gif](gifs/16.gif) |
| 17    | ```■□▪▫```                                                                                                                                                                                                                                                                                | ![Sample Gif](gifs/17.gif) |
| 18    | ```←↑→↓```                                                                                                                                                                                                                                                                                | ![Sample Gif](gifs/18.gif) |
| 19    | ```╫╪```                                                                                                                                                                                                                                                                                  | ![Sample Gif](gifs/19.gif) |
| 20    | ```⇐⇖⇑⇗⇒⇘⇓⇙```                                                                                                                                                                                                                                                                            | ![Sample Gif](gifs/20.gif) |
| 21    | ```⠁⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈⠈```                                                                                                                                                                                                                                                       | ![Sample Gif](gifs/21.gif) |
| 22    | ```⠈⠉⠋⠓⠒⠐⠐⠒⠖⠦⠤⠠⠠⠤⠦⠖⠒⠐⠐⠒⠓⠋⠉⠈```                                                                                                                                                                                                                                                            | ![Sample Gif](gifs/22.gif) |
| 23    | ```⠁⠉⠙⠚⠒⠂⠂⠒⠲⠴⠤⠄⠄⠤⠴⠲⠒⠂⠂⠒⠚⠙⠉⠁```                                                                                                                                                                                                                                                            | ![Sample Gif](gifs/23.gif) |
| 24    | ```⠋⠙⠚⠒⠂⠂⠒⠲⠴⠦⠖⠒⠐⠐⠒⠓⠋```                                                                                                                                                                                                                                                                   | ![Sample Gif](gifs/24.gif) |
| 25    | ```ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ```                                                                                                                                                                                                                             | ![Sample Gif](gifs/25.gif) |
| 26    | ```. .. ...```                                                                                                                                                                                                                                                                            | ![Sample Gif](gifs/26.gif) |
| 27    | ```▁▂▃▄▅▆▇█▉▊▋▌▍▎▏▏▎▍▌▋▊▉█▇▆▅▄▃▂▁```                                                                                                                                                                                                                                                      | ![Sample Gif](gifs/27.gif) |
| 28    | ```.oO°Oo.```                                                                                                                                                                                                                                                                             | ![Sample Gif](gifs/28.gif) |
| 29    | ```+x```                                                                                                                                                                                                                                                                                  | ![Sample Gif](gifs/29.gif) |
| 30    | ```v<^>```                                                                                                                                                                                                                                                                                | ![Sample Gif](gifs/30.gif) |
| 31    | ```>>---> >>--->  >>--->   >>--->    >>--->    <---<<    <---<<   <---<<  <---<< <---<<```                                                                                                                                                                                                | ![Sample Gif](gifs/31.gif) |
| 32    | ```\| \|\| \|\|\| \|\|\|\| \|\|\|\|\| \|\|\|\|\|\| \|\|\|\|\| \|\|\|\| \|\|\| \|\| \|```                                                                                                                                                                                                  | ![Sample Gif](gifs/32.gif) |
| 33    | ```[] [=] [==] [===] [====] [=====] [======] [=======] [========] [=========] [==========]```                                                                                                                                                                                             | ![Sample Gif](gifs/33.gif) |
| 34    | ```(*---------) (-*--------) (--*-------) (---*------) (----*-----) (-----*----) (------*---) (-------*--) (--------*-) (---------*)```                                                                                                                                                   | ![Sample Gif](gifs/34.gif) |
| 35    | ```█▒▒▒▒▒▒▒▒▒ ███▒▒▒▒▒▒▒ █████▒▒▒▒▒ ███████▒▒▒ ██████████```                                                                                                                                                                                                                              | ![Sample Gif](gifs/35.gif) |
| 36    | ```[                    ] [=>                  ] [===>                ] [=====>              ] [======>             ] [========>           ] [==========>         ] [============>       ] [==============>     ] [================>   ] [==================> ] [===================>]``` | ![Sample Gif](gifs/36.gif) |
| 37    | ```🌍 🌎 🌏```                                                                                                                                                                                                                                                                               | ![Sample Gif](gifs/39.gif) |
| 38    | ```◜ ◝ ◞ ◟```                                                                                                                                                                                                                                                                             | ![Sample Gif](gifs/40.gif) |
| 39    | ```⬒ ⬔ ⬓ ⬕```                                                                                                                                                                                                                                                                             | ![Sample Gif](gifs/41.gif) |
| 40    | ```⬖ ⬘ ⬗ ⬙```                                                                                                                                                                                                                                                                             | ![Sample Gif](gifs/42.gif) |
| 41    | ```[>>>          >] []>>>>        [] []  >>>>      [] []    >>>>    [] []      >>>>  [] []        >>>>[] [>>          >>]```                                                                                                                                                              | ![Sample Gif](gifs/43.gif) |

