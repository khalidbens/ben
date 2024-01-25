<?php
session_start();

// Fonction pour sauvegarder les tâches dans la session
function saveTasks($tasks) {
    $_SESSION['tasks'] = $tasks;
}
// Fonction pour charger les tâches depuis la session
function loadTasks() {
    return isset($_SESSION['tasks']) ? $_SESSION['tasks'] : [];
}

// Charger les tâches existantes
$tasks = loadTasks();

// Vérifier si le formulaire a été soumis pour ajouter une nouvelle tâche
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['taskInput'])) {
        $taskText = trim($_POST['taskInput']);
        if ($taskText !== '') {
            $tasks[] = ['task' => $taskText, 'completed' => false];
            saveTasks($tasks);
        }
    } elseif (isset($_POST['delete'])) {
        $index = (int)$_POST['delete'];
        if (isset($tasks[$index])) {
            array_splice($tasks, $index, 1);
            saveTasks($tasks);
        }
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice JSON</title>
    <link rel="stylesheet" href="style.css">
    <!-- <script src="script.js" defer></script> -->
</head>
<body>
    <div class="todo-container">
        <h1>Liste de choses à faire</h1>
        <form method="post">
            <input type="text" name="taskInput" placeholder="text">
            <button type="submit">Ajouter</button>
        </form>
        <ul class="task-list">
            <?php foreach ($tasks as $index => $task): ?>
                <li class="<?= $task['completed'] ? 'completed' : '' ?>">
                    <?= htmlspecialchars($task['task']) ?>
                    <form method="post" style="display: inline;">
                        <input type="hidden" name="delete" value="<?= $index ?>">
                        <button type="submit" class="delete">&#10007;</button>
                    </form>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</body>
</html>
