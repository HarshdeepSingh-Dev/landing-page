"use client";
// import { useEffect } from "react";
import Head from "next/head";

export default function StudyPage() {
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         window.location.href = "/";
    //     }, 1500);

    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <>
            <Head>
                <title>Redirecting to Color Trading App…</title>
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
                {/* Hero Section */}
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Welcome to Your Study Hub
                    </h1>
                    <p className="text-gray-600 text-lg mb-6">
                        You are about to explore our learning resources. Hold tight while we redirect you to the full study experience.
                    </p>
                </section>

                {/* Study Highlights / Benefits */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl w-full">
                    <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition-transform text-center">
                        <h2 className="text-xl font-semibold text-blue-600 mb-2">📚 Learn Efficiently</h2>
                        <p className="text-gray-700">Get structured study material that saves your time and effort.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition-transform text-center">
                        <h2 className="text-xl font-semibold text-blue-600 mb-2">📝 Track Progress</h2>
                        <p className="text-gray-700">Monitor your learning journey and focus on key areas.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition-transform text-center">
                        <h2 className="text-xl font-semibold text-blue-600 mb-2">🏆 Achieve Goals</h2>
                        <p className="text-gray-700">Stay motivated with clear targets and measurable outcomes.</p>
                    </div>
                </section>

                {/* Redirect Notice / CTA */}
                <section className="text-center">
                    <p className="text-gray-600 mb-4">
                        You will be redirected shortly to access the full study materials.
                    </p>
                    <div className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow animate-bounce">
                        Redirecting… ⏳
                    </div>
                </section>
            </main>
        </>
    );
}
