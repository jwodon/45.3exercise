function App() {
    return (
        <div>
            <Tweet name="Jake" username="odon" date={new Date().toDateString()} message="Sup" />
            <Tweet name="Finn" username="finn" date={new Date().toDateString()} message="i love food" />
            <Tweet name="Rey" username="rey" date={new Date().toDateString()} message="i love ball" />
        </div>
    );
}
