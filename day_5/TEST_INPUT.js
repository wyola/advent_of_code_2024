const TEST_INPUT = `69|42
95|73
95|53
18|16
18|68
18|96
94|61
94|66
94|26
94|64
25|36
25|44
25|62
25|41
25|32
67|62
67|41
67|56
67|37
67|31
67|52
33|17
33|25
33|65
33|53
33|48
33|94
33|87
24|94
24|44
24|18
24|48
24|61
24|67
24|56
24|34
81|23
81|17
81|14
81|47
81|67
81|64
81|48
81|44
81|45
44|62
44|96
44|72
44|31
44|18
44|45
44|32
44|36
44|64
44|52
16|68
16|77
16|81
16|41
16|65
16|95
16|14
16|26
16|78
16|23
16|92
87|69
87|62
87|42
87|32
87|41
87|36
87|45
87|26
87|56
87|31
87|66
87|77
42|24
42|14
42|37
42|95
42|65
42|81
42|78
42|61
42|47
42|33
42|75
42|17
42|44
72|68
72|92
72|62
72|78
72|29
72|57
72|69
72|45
72|19
72|41
72|49
72|26
72|96
72|82
57|14
57|26
57|48
57|91
57|17
57|77
57|44
57|24
57|95
57|68
57|47
57|81
57|42
57|19
57|78
66|29
66|33
66|69
66|36
66|16
66|92
66|56
66|39
66|49
66|62
66|32
66|57
66|19
66|45
66|77
66|96
75|94
75|96
75|18
75|61
75|41
75|62
75|87
75|31
75|16
75|39
75|69
75|45
75|72
75|34
75|64
75|73
75|57
62|39
62|81
62|69
62|19
62|95
62|23
62|78
62|65
62|33
62|92
62|82
62|29
62|49
62|26
62|16
62|41
62|53
62|24
73|39
73|33
73|19
73|52
73|32
73|36
73|77
73|16
73|29
73|45
73|49
73|68
73|96
73|26
73|69
73|72
73|34
73|62
73|41
31|57
31|56
31|49
31|19
31|26
31|64
31|16
31|34
31|32
31|18
31|45
31|62
31|42
31|72
31|66
31|52
31|39
31|69
31|41
31|29
68|78
68|67
68|31
68|25
68|95
68|23
68|82
68|14
68|81
68|33
68|94
68|48
68|92
68|47
68|53
68|37
68|91
68|44
68|17
68|75
68|61
65|47
65|14
65|73
65|61
65|81
65|25
65|44
65|75
65|67
65|53
65|18
65|31
65|64
65|72
65|48
65|24
65|94
65|95
65|37
65|23
65|17
65|66
45|57
45|39
45|68
45|19
45|34
45|65
45|77
45|52
45|26
45|42
45|41
45|82
45|36
45|92
45|33
45|32
45|78
45|96
45|62
45|16
45|56
45|49
45|69
52|91
52|16
52|81
52|92
52|96
52|57
52|78
52|19
52|26
52|41
52|34
52|33
52|65
52|39
52|82
52|32
52|77
52|69
52|68
52|62
52|29
52|42
52|95
52|49
37|75
37|96
37|56
37|61
37|62
37|94
37|34
37|32
37|36
37|16
37|57
37|41
37|52
37|73
37|45
37|72
37|69
37|39
37|18
37|29
37|64
37|31
37|87
37|66
82|64
82|94
82|91
82|25
82|95
82|31
82|24
82|67
82|48
82|65
82|18
82|73
82|17
82|75
82|44
82|53
82|81
82|37
82|14
82|23
82|78
82|87
82|47
82|61
92|47
92|53
92|78
92|48
92|25
92|44
92|87
92|65
92|75
92|61
92|17
92|24
92|14
92|95
92|18
92|94
92|23
92|81
92|37
92|82
92|67
92|91
92|31
92|64
23|31
23|73
23|67
23|17
23|61
23|47
23|25
23|24
23|66
23|37
23|48
23|14
23|44
23|75
23|72
23|36
23|56
23|52
23|45
23|87
23|53
23|64
23|94
23|18
39|92
39|49
39|33
39|14
39|42
39|48
39|82
39|53
39|78
39|95
39|68
39|25
39|57
39|65
39|91
39|24
39|19
39|47
39|29
39|81
39|77
39|23
39|26
39|67
47|94
47|16
47|56
47|87
47|44
47|73
47|31
47|34
47|72
47|66
47|17
47|45
47|62
47|52
47|36
47|61
47|75
47|37
47|69
47|25
47|96
47|18
47|67
47|64
64|36
64|39
64|96
64|73
64|29
64|41
64|57
64|18
64|42
64|16
64|68
64|77
64|66
64|69
64|49
64|32
64|56
64|45
64|62
64|19
64|52
64|34
64|26
64|72
41|26
41|48
41|92
41|14
41|32
41|53
41|39
41|57
41|82
41|77
41|95
41|24
41|19
41|47
41|91
41|49
41|33
41|23
41|68
41|42
41|65
41|29
41|81
41|78
34|65
34|41
34|39
34|92
34|19
34|16
34|49
34|29
34|42
34|32
34|26
34|78
34|62
34|68
34|82
34|77
34|57
34|91
34|95
34|69
34|96
34|81
34|33
34|23
29|65
29|53
29|48
29|77
29|78
29|44
29|19
29|47
29|68
29|26
29|82
29|91
29|57
29|92
29|23
29|81
29|25
29|67
29|49
29|95
29|42
29|24
29|33
29|14
17|45
17|34
17|94
17|64
17|96
17|52
17|56
17|41
17|75
17|87
17|37
17|39
17|29
17|69
17|62
17|66
17|18
17|16
17|31
17|73
17|36
17|61
17|32
17|72
53|56
53|17
53|48
53|25
53|37
53|72
53|36
53|61
53|18
53|34
53|87
53|64
53|66
53|75
53|47
53|67
53|31
53|14
53|52
53|73
53|44
53|45
53|24
53|94
32|14
32|23
32|24
32|49
32|91
32|68
32|78
32|57
32|29
32|53
32|26
32|33
32|39
32|65
32|95
32|48
32|92
32|47
32|77
32|67
32|82
32|81
32|19
32|42
78|18
78|48
78|91
78|87
78|81
78|61
78|67
78|23
78|75
78|37
78|24
78|25
78|95
78|94
78|14
78|64
78|47
78|53
78|65
78|31
78|44
78|17
78|73
78|66
61|49
61|87
61|69
61|18
61|77
61|52
61|64
61|26
61|57
61|32
61|45
61|41
61|56
61|34
61|96
61|72
61|62
61|66
61|31
61|36
61|16
61|73
61|39
61|29
14|62
14|31
14|56
14|96
14|87
14|25
14|34
14|47
14|17
14|67
14|61
14|69
14|18
14|73
14|66
14|52
14|37
14|44
14|94
14|72
14|36
14|45
14|64
14|75
96|49
96|32
96|42
96|29
96|57
96|68
96|95
96|91
96|92
96|33
96|19
96|69
96|41
96|16
96|78
96|81
96|26
96|65
96|23
96|62
96|82
96|77
96|39
96|53
77|19
77|82
77|25
77|91
77|33
77|44
77|68
77|37
77|75
77|65
77|42
77|81
77|23
77|78
77|67
77|92
77|17
77|14
77|24
77|48
77|47
77|95
77|49
77|53
56|39
56|92
56|33
56|96
56|32
56|52
56|62
56|68
56|78
56|42
56|91
56|69
56|29
56|65
56|16
56|34
56|49
56|95
56|41
56|26
56|82
56|57
56|19
56|77
26|17
26|92
26|81
26|49
26|47
26|37
26|19
26|24
26|42
26|25
26|82
26|65
26|44
26|14
26|23
26|77
26|91
26|53
26|95
26|48
26|68
26|33
26|67
26|78
48|56
48|45
48|25
48|47
48|37
48|31
48|67
48|96
48|18
48|44
48|73
48|36
48|14
48|61
48|75
48|87
48|52
48|17
48|62
48|72
48|64
48|94
48|34
48|66
19|92
19|61
19|33
19|82
19|94
19|17
19|68
19|48
19|23
19|95
19|65
19|47
19|24
19|75
19|81
19|91
19|37
19|67
19|25
19|14
19|53
19|78
19|87
19|44
91|73
91|94
91|67
91|23
91|31
91|18
91|25
91|53
91|24
91|66
91|17
91|95
91|45
91|61
91|37
91|81
91|48
91|47
91|75
91|14
91|44
91|87
91|64
91|72
36|42
36|65
36|96
36|32
36|19
36|91
36|56
36|92
36|26
36|33
36|29
36|52
36|69
36|62
36|34
36|68
36|78
36|41
36|39
36|82
36|49
36|77
36|57
36|16
49|42
49|23
49|68
49|17
49|92
49|78
49|44
49|95
49|33
49|75
49|25
49|24
49|14
49|67
49|53
49|48
49|47
49|94
49|82
49|19
49|37
49|81
49|65
49|91
69|39
69|92
69|26
69|95
69|65
69|29
69|57
69|33
69|81
69|24
69|41
69|19
69|77
69|68
69|32
69|91
69|48
69|23
69|82
69|78
69|16
69|53
69|49
95|37
95|47
95|64
95|94
95|18
95|87
95|48
95|75
95|23
95|36
95|45
95|14
95|25
95|31
95|81
95|67
95|72
95|44
95|66
95|61
95|24
95|17
18|66
18|29
18|36
18|34
18|39
18|72
18|32
18|45
18|77
18|41
18|73
18|33
18|52
18|62
18|19
18|49
18|56
18|42
18|26
18|69
18|57
94|87
94|69
94|29
94|73
94|36
94|41
94|57
94|16
94|32
94|18
94|52
94|72
94|77
94|96
94|62
94|56
94|39
94|31
94|45
94|34
25|18
25|75
25|17
25|94
25|45
25|31
25|56
25|69
25|73
25|96
25|34
25|16
25|61
25|37
25|52
25|66
25|87
25|64
25|72
67|94
67|66
67|18
67|87
67|96
67|61
67|75
67|44
67|25
67|69
67|73
67|17
67|34
67|16
67|45
67|36
67|64
67|72
33|64
33|81
33|91
33|47
33|67
33|92
33|31
33|14
33|61
33|44
33|23
33|82
33|24
33|75
33|95
33|78
33|37
24|75
24|52
24|66
24|64
24|36
24|31
24|17
24|37
24|73
24|87
24|47
24|45
24|96
24|72
24|25
24|14
81|25
81|36
81|94
81|56
81|66
81|18
81|72
81|31
81|73
81|75
81|37
81|87
81|24
81|61
81|53
44|75
44|16
44|94
44|61
44|87
44|66
44|73
44|39
44|41
44|69
44|56
44|34
44|17
44|37
16|57
16|19
16|49
16|42
16|82
16|32
16|48
16|24
16|91
16|53
16|33
16|39
16|29
87|34
87|72
87|64
87|39
87|29
87|49
87|96
87|18
87|52
87|57
87|16
87|73
42|82
42|25
42|53
42|68
42|48
42|67
42|19
42|23
42|92
42|94
42|91
72|36
72|56
72|16
72|42
72|34
72|77
72|32
72|52
72|33
72|39
57|67
57|49
57|33
57|65
57|82
57|23
57|53
57|92
57|25
66|26
66|41
66|72
66|68
66|52
66|34
66|82
66|42
75|66
75|26
75|52
75|36
75|29
75|56
75|32
62|32
62|42
62|68
62|91
62|77
62|57
73|56
73|92
73|42
73|66
73|57
31|36
31|73
31|96
31|77
68|24
68|65
68|87
65|91
65|87
45|29

68,33,82,65,23,48,67,17,87
52,72,87,94,75,36,18,47,34,61,66,24,73
24,77,33,26,82,17,44,68,49,92,48,42,47
69,16,41,32,39,29,57,77,49,42,19,68,33,92,82,78,65,91,95,81,23,53,24
48,14,25,44,75,94,31,66,36
19,33,92,65,48
17,78,75,37,67,14,33,94,42,24,82,23,44,91,25
87,64,18,72,45,36,56,34,96,41,32,57,49
53,24,36,81,47,37,17
92,78,95,23,24,48,14,47,25,75,94,31,64
42,68,26,33,72,77,36,92,56,62,57,49,32,41,29
48,18,95,44,91,75,67,73,64,94,31,17,61,72,47,14,23,37,25,24,66
19,33,92,82,78,65,91,81,23,53,24,48,14,47,25,44,75,94,61
42,62,23,32,81,16,57,78,96,39,69
34,56,72,62,18,31,45,41,69,64,77,32,39,42,36,52,96
68,33,92,82,65,95,81,48,14,67,25,17,37,75,94,61,87
14,87,67,73,18,37,61,31,25,34,45,96,47,62,44,17,75,72,94
39,47,77,48,68,91,67,42,57
66,64,94,87,65,23,75
17,37,42,49,48,68,67,24,47,77,19,91,23
32,53,24,16,82,57,41,19,78,48,65,81,91,49,42,29,92,95,77,33,23
44,25,61,14,31,37,47,72,34,75,18,94,17,66,52,87,36
48,47,67,17,37,31,66,72,45,56,52,34,96
36,56,52,96,62,69,16,39,57,77,49,19,92,78,65
82,78,95,23,53,14,67,94,61,31,18
18,73,72,45,56,52,34,96,62,16,41,32,39,57,26,77,42,19,68
32,69,62,73,45,31,64
18,61,14,81,95,87,31,73,91,94,75,44,53,65,67,64,48,24,37
57,56,32,77,39,62,34,18,72,36,29,31,73,87,52,96,45,26,16
57,26,77,49,42,19,68,33,92,82,78,65,91,95,81,23,53,24,48,14,47,67,25
42,33,92,78,65,91,95,81,23,53,24,47,67,25,94
18,94,24,73,61,47,81,53,44,48,67,31,14,95,75,45,25,87,64,37,17
73,66,72,45,36,56,52,34,96,69,16,41,32,39,57,26,77,49,42,19,68
95,31,67,47,91,17,61,72,66,53,25,87,18,23,81,94,37,44,24,64,73
49,19,33,92,78,91,95,23,24,48,47,67,44
39,65,53,92,33,95,81,26,32,29,91,82,41,77,49,24,16,69,78,57,23,68,42
56,52,16,41,32,39,29,77,49,42,19,68,92,65,91
53,24,48,14,47,67,25,17,37,75,94,61,87,31,64,18,72,45,36,56,52
31,62,64,96,56,67,94,72,69,61,18,87,52,25,73,66,75,44,47
64,16,26,72,41,31,34,66,61,45,18,39,69,94,96,73,62,36,87,52,57
72,45,69,49,42,19,68
47,37,75,31,18,66,69
69,16,57,82,95,23,24
29,95,92,34,57,33,91,49,62,26,39,19,96,69,16,78,32
77,68,26,42,19,41,69,29,18
48,65,78,49,68,39,81,82,26,67,19,77,95,24,91,29,53,47,57,92,33
92,24,81,65,14,95,17,67,23,19,61,91,44
96,48,31,67,56,52,14,45,61,34,75,94,25,47,37,17,87,64,66,44,72
56,69,39,29,42,65,91
37,75,61,87,31,64,18,72,56,52,96,62,69,16,41,39,29
23,33,49,65,77,14,37,92,47,19,82
52,34,77,72,29,87,41,32,18,66,39,96,36,26,73
62,69,16,18,72,94,75,66,96,56,32,41,37
36,69,41,16,82,33,68,77,62,65,29
42,19,68,33,92,78,65,95,81,23,53,24,48,14,47,25,44,75,94
96,87,57,39,75,36,45,41,32
78,47,67,14,42,37,94
62,49,19,78,53,57,39,81,26
94,87,31,64,18,66,72,45,52,34,96,62,16,41,32,39,57
57,81,77,68,23,14,33,95,82,26,49,48,65,53,32,24,19,78,42,39,41,92,29
67,25,44,37,75,61,64,18,73,45,16
81,24,47,25,44,75,94,87,64,18,73,45,36
65,91,81,23,53,24,48,14,47,67,25,44,17,94,61,87,31,64,18,73,66
23,53,47,44,17,37,94,61,87,31,73,66,72,36,56
64,36,66,31,16,18,56
87,31,69,41,49
48,91,68,23,26,67,92,81,77,24,25,78,53,65,17,95,14,33,44
49,68,53,16,69,33,82,29,81,26,77,23,19,95,57,39,42,65,78,32,92,91,24
47,37,73,72,36,14,94,66,24,87,52,34,18,17,61
94,61,45,36,56,34,29,57,26
77,26,78,81,34,62,33,57,82,19,91,69,65,49,32,96,92
95,23,53,47,67,25,44,17,37,75,94,87,31,64,18,73,66
23,26,14,41,68,78,29
87,23,61,94,48,17,95,82,18,64,53
81,75,64,61,53,47,14,67,44,48,31,72,18,87,94,17,95,37,24,23,66,73,25
53,24,25,44,37,75,94,61,87,31,64,73,66,56,52
29,57,26,77,49,42,19,68,82,78,65,95,48,67,25
19,36,49,62,96,73,45,18,64
96,69,16,41,32,91,23
91,81,53,24,48,14,47,44,17,37,94,87,73,66,72
92,95,31,94,44,33,24,14,67,23,81
18,81,17,66,64,87,14,65,24,25,95,53,48,67,75,94,61
53,24,14,37,61,87,18,45,36,56,52
32,18,72,29,34,36,73,69,52,87,41,64,45,61,37
47,67,17,37,94,61,87,31,18,45,52,34,96,62,69
78,77,82,39,48,14,57,81,23,95,26,92,68,49,53,29,32
78,24,42,68,41,57,29,82,77,32,39,14,91
36,45,31,56,39,64,34,52,66,72,18,26,73,16,41,29,96,49,62,77,69,42,57
47,25,17,37,94,87,31,52,69
77,68,91,81,53,24,48
17,75,94,61,64,73,66,36,52,96,62,16,39
87,69,37,72,36,62,39,96,45,66,17,64,56,18,73,31,34,52,94,16,32,61,75
31,64,18,72,32
24,72,45,53,25,37,23,44,64,75,36,66,81,94,48
45,36,69,29,42
57,26,77,19,81,23,48,14,44
62,41,32,39,29,57,26,77,42,19,92,82,65,91,95,81,53
56,52,34,69,16,41,32,39,29,77,49,42,68,82,91
29,56,66,34,49,36,96,32,18,69,16,52,72,41,57,45,39,19,42,77,64
36,45,68,77,39,69,49,92,26,41,32,57,19,33,96,78,34,52,42,29,62
45,64,52,72,24,67,53
16,69,32,42,92,45,41,26,19,39,36,77,56,82,78,96,34
69,16,41,32,39,29,57,26,77,49,42,19,33,92,82,78,91,81,23,53,24
33,92,82,78,65,91,95,81,23,53,24,48,47,67,25,44,17,37,75,94,61,87,31
95,39,48,49,23,24,42,33,29,57,91,65,81,14,92,19,41,32,82,77,78
19,36,77,26,56,96,39,49,29,64,32,69,42
68,77,81,34,33,19,96
45,17,36,24,47,56,37,61,75,94,18
41,65,16,42,78,81,69,26,92
19,65,78,14,49,75,53,33,17,82,67
14,47,44,75,45,96,62
57,19,68,33,65,23,53,47,44
53,24,44,17,37,75,64,18,73,72,52
41,32,39,29,57,26,77,49,42,19,68,92,82,78,65,91,95,81,23,53,24,48,14
95,81,23,53,24,48,47,25,44,37,94,61,87,64,18,73,45
65,68,44,14,91,61,23,25,67,19,37,81,17
66,17,37,94,64,18,95,73,25,81,47,48,61,31,24,14,23,72,53,44,87
53,48,14,67,17,87,31,64,73,45,36,56,52
18,39,41,96,34,57,73,32,64,16,69,66,62,26,45
29,26,49,42,19,78,65,95,81,53,67
77,68,39,56,36,34,82,26,33,62,42,78,65,29,16,96,19,41,49,57,92
25,94,61,87,31,64,18,66,45,36,56,52,62,69,41
19,33,95,81,44,37,61
37,73,61,64,52,34,45,31,96,66,62,25,44,56,17,87,67,75,18,94,72,36,14
45,36,34,16,77,49,78
61,87,31,64,18,66,72,45,96,16,41,39,29,57,77
87,47,96,37,31,48,67
77,26,96,39,49,72,45,32,68,52,66,69,19,34,29,57,73,42,16,36,41,62,56
61,87,64,72,45,36,96,62,69,16,39,29,57
61,31,64,18,73,66,72,45,56,52,34,62,16,32,77
18,66,72,52,34,39,26,77,68
94,67,48,65,81,19,23,53,25,95,44,78,17,91,14,24,47,92,33,61,37
18,66,72,56,52,16,41,32,57,26,77,49,42,19,68
48,94,87,53,17,18,91,25,67
14,45,52,36,25,44,37,62,87,17,67,64,73
25,17,37,75,94,61,87,64,66,72,36,34,96,62,69,16,41
48,14,47,67,25,44,17,37,75,94,61,31,64,18,73,72,45,36,52,34,96
45,52,18,87,37,96,44,64,61,75,34
36,32,45,72,61,77,57
39,91,49,24,29,23,67,77,57,33,48,68,42
23,64,91,25,61,95,24,37,17,14,94
92,82,78,65,91,95,81,23,53,48,14,47,67,44,37,75,87,31,64
65,91,95,81,23,53,24,48,14,47,67,25,44,17,37,75,61,87,31,64,18,73,66
25,17,87,53,67,48,72,14,36,18,61,37,56,66,47,23,73,94,64,24,45,75,31
26,77,49,42,19,68,92,82,78,65,81,53,24,48,14,47,25,44,17
78,14,91,77,42,44,37,48,53,81,67,82,19
39,29,26,49,42,33,95,23,48,47,67
81,23,48,44,37,94,61,18,66,72,36
18,31,14,67,47,52,24,66,45,56,37,34,94
26,77,49,42,19,92,82,78,95,53,24,48,67,44,17
73,64,31,87,16,26,29,18,66,94,61
23,92,61,44,25,94,82,33,19
67,24,92,49,14,23,17,75,95,48,44,53,33
14,47,67,25,44,17,37,75,94,61,87,31,73,66,72,45,56,52,34,96,62
16,41,32,42,19,92,82,78,65,91,95,23,53
65,94,31,64,18
78,68,37,25,75,17,48,47,44,95,33,91,53,23,14,42,19,92,82,65,24,81,67
64,18,73,45,96,16,39,29,77,49,19
24,82,44,75,68,53,48,47,92,67,81,19,49
94,61,52,96,41,39,29
39,37,87,56,32,96,31,94,69,61,72
62,68,52,29,91,19,33,65,26
16,41,32,39,29,57,26,77,49,42,19,68,33,82,78,65,91,53,24
14,37,53,42,81,44,67,68,78,47,91,33,82,48,95,23,65,17,94,75,24
94,61,87,31,64,18,73,66,72,45,36,56,52,34,62,69,16,41,32,39,29,57,26
19,95,42,52,34,57,49,96,77,26,82,78,16
77,42,81,23,53,14,47
73,66,72,45,36,56,52,96,62,69,16,41,32,39,29,57,26,77,49,42,19,68,33
62,69,16,41,32,77,19,33,92,82,53
56,96,39,68,82,65,91
68,49,34,41,16,72,19,52,96,77,26,69,39,33,42,56,62,92,57,36,66,29,45
41,26,42,96,64,19,29
34,39,92,29,16,77,42,56,32,19,69,36,57,41,96,33,65,26,68
69,77,96,41,57,39,82,91,81,95,34
82,95,81,53,14,67,25,44,17,37,75,94,61,31,18
39,57,26,42,68,33,82,91,53,24,48,14,67
77,49,42,19,33,92,82,78,91,95,81,23,53,24,48,14,47,67,25,17,37
67,25,44,37,75,94,31,64,18,66,72,56,52,34,96,69,16
42,19,57,62,23,65,41,81,53,33,92,95,77
33,44,68,23,37,17,95,67,14,87,61
18,64,75,95,67,25,23,53,47,78,87,61,48,91,94,65,81,31,14,24,44,37,82
57,42,92,53,26,25,78,81,44,67,95,82,77,33,24,68,48,49,23,14,19,91,47
81,29,68,42,19,92,67,78,82,25,95,26,14,91,49
16,18,29,73,34,96,64,72,77,36,26,56,87,57,52,45,61
72,41,19,45,18,42,66,39,62,29,36,32,34,77,64,26,52,69,57,49,73,16,56
24,48,14,47,67,44,17,37,75,94,61,87,31,64,66,56,34
37,75,61,65,31,47,87
78,95,53,47,25
29,72,36,68,39,57,49,82,62,41,33,77,92
33,53,78,14,77,82,32,49,39
78,65,91,95,81,53,24,48,14,67,25,44,37,75,61,87,31,64,73
56,96,45,41,49,72,36,73,68,42,29,62,34,16,33,69,66,32,77
47,67,25,44,17,37,94,61,87,31,18,73,66,72,45,36,56,52,34,96,69
95,23,48,14,67,75,87,73,45`;

module.exports = TEST_INPUT;