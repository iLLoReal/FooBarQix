# FooBarQix
FooBarQix Kata focusing on TDD


Subject: 

<div>
 <p>You should implement a function String compute(String) which implements the following rules.</p>

<h2 id="step-1">Step 1</h2>

<h3 id="rules">Rules</h3>

<ul>
<li>If the number is divisible by 3, write “Foo” instead of the number</li>
<li>If the number is divisible by 5, add “Bar”</li>
<li>If the number is divisible by 7, add “Qix”</li>
<li>For each digit 3, 5, 7, add “Foo”, “Bar”, “Qix” in the digits order.</li>
</ul>

<h3 id="examples">Examples</h3>

<pre><code>1  =&gt; 1
2  =&gt; 2
3  =&gt; FooFoo (divisible by 3, contains 3)
4  =&gt; 4
5  =&gt; BarBar (divisible by 5, contains 5)
6  =&gt; Foo (divisible by 3)
7  =&gt; QixQix (divisible by 7, contains 7)
8  =&gt; 8
9  =&gt; Foo
10 =&gt; Bar
13 =&gt; Foo
15 =&gt; FooBarBar (divisible by 3, divisible by 5, contains 5)
21 =&gt; FooQix
33 =&gt; FooFooFoo (divisible by 3, contains two 3)
51 =&gt; FooBar
53 =&gt; BarFoo
</code></pre>

<h2 id="step-2">Step 2</h2>

<p>We have a new business request: we must keep a trace of 0 in numbers, each 0 must be replaced by char “*“.</p>

<h3 id="examples-1">Examples</h3>

<pre><code>101   =&gt; 1*1
303   =&gt; FooFoo*Foo
105   =&gt; FooBarQix*Bar
10101 =&gt; FooQix**
</code></pre>
</div>
